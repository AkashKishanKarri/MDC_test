import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firebaseConfig = {
  apiKey: "AIzaSyDPDTJIprKdiKGxAYFmQs--JgvdQVOkpBk",
  authDomain: "mdc-website-2526.firebaseapp.com",
  projectId: "mdc-website-2526",
  storageBucket: "mdc-website-2526.firebasestorage.app",
  messagingSenderId: "435807919406",
  appId: "1:435807919406:web:244a76bb241db460f66ebf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Get all files in a directory that are images
function getImagesFromDirectory(dirPath, urlPrefix) {
  try {
    if (!fs.existsSync(dirPath)) return [];
    const files = fs.readdirSync(dirPath);
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext) && !file.startsWith('.');
    });
    // Return max 4 images to match UI requirement and reduce load
    return images.slice(0, 4).map(file => `${urlPrefix}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

// Function to find the best matching folder name for an event title
function findMatchingFolder(title, foldersList) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let normTitle = normalize(title);
    
    // Explicit bypasses based on folder names 
    if (normTitle.includes('shoreshut')) normTitle = 'meta shut down'; // Fixing any weird shore ties
    if (normTitle.includes('unlockingapi')) return 'Unlocking API_s';
    if (normTitle.includes('orientation')) return 'Orientation';
    
    // Exact fuzzy match
    let match = foldersList.find(f => normalize(f) === normTitle);
    if (match) return match;
    
    // Partial substring match
    match = foldersList.find(f => normTitle.includes(normalize(f)) || normalize(f).includes(normTitle));
    if (match) return match;
    
    return null;
}

async function fixImages() {
  try {
    // 1. Authenticate to bypass security rules
    console.log("Authenticating...");
    await signInWithEmailAndPassword(auth, "admin@club.com", "admin123");
    console.log("Authenticated successfully.");

    // 2. Load available folders
    const photos2425Path = path.join(__dirname, '../public/photos24-25');
    const photos2526Path = path.join(__dirname, '../public/photos25-26');
    
    const folders2425 = fs.existsSync(photos2425Path) ? fs.readdirSync(photos2425Path).filter(f => !f.startsWith('.')) : [];
    const folders2526 = fs.existsSync(photos2526Path) ? fs.readdirSync(photos2526Path).filter(f => !f.startsWith('.')) : [];

    // 3. Fetch all events
    console.log("Fetching events from Firestore...");
    const eventsSnapshot = await getDocs(collection(db, "events"));
    
    let fixCount = 0;

    for (const eventDoc of eventsSnapshot.docs) {
      const eventData = eventDoc.data();
      const id = eventDoc.id;
      const title = eventData.title;
      const year = eventData.year;
      
      let newImages = [];
      let foundFolder = false;

      if (year === '2024-25') {
          const match = findMatchingFolder(title, folders2425);
          if (match) {
              const fullDirPath = path.join(photos2425Path, match);
              newImages = getImagesFromDirectory(fullDirPath, `/photos24-25/${encodeURIComponent(match)}`);
              foundFolder = true;
          }
      } else if (year === '2025-26') {
          const match = findMatchingFolder(title, folders2526);
          if (match) {
              const fullDirPath = path.join(photos2526Path, match);
              newImages = getImagesFromDirectory(fullDirPath, `/photos25-26/${encodeURIComponent(match)}`);
              foundFolder = true;
          }
      }

      // 4. Update Document
      try {
          await updateDoc(doc(db, "events", id), {
            images: newImages
          });
          console.log(`[UPDATED] ${year} | ${title} -> Found Match: ${foundFolder ? 'YES' : 'NO'} | Assigned Images: ${newImages.length}`);
          fixCount++;
      } catch (err) {
          console.error(`Failed to update ${title}:`, err);
      }
    }
    
    console.log(`Successfully fixed ${fixCount} events in the database.`);
    
  } catch (error) {
    console.error("Script failed:", error);
  } finally {
    process.exit(0);
  }
}

fixImages();
