import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tenureData } from "../src/data/tenureData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

let missingCount = 0;

for (const yearData of tenureData) {
    if (!yearData.sections) continue;
    
    for (const section of yearData.sections) {
        const folderPath = String(section.folder);
        if (folderPath.includes('founders')) continue;
        
        for (const roleGroup of section.roles) {
            for (const member of roleGroup.members) {
                const ext = member.ext || 'jpg';
                const fileToFind = `${member.name}.${ext}`;
                const absolutePath = path.join(publicDir, folderPath, fileToFind);
                
                if (!fs.existsSync(absolutePath)) {
                    console.log(`MISSING: ${yearData.year} | ${section.title} | ${member.name}`);
                    console.log(`   Expected path: public/${folderPath}/${fileToFind}`);
                    
                    const checkDir = path.join(publicDir, folderPath);
                    if (fs.existsSync(checkDir)) {
                        const files = fs.readdirSync(checkDir).filter(f => !f.startsWith('.'));
                        const firstPart = member.name.split(' ')[0].toLowerCase();
                        const match = files.find(f => f.toLowerCase().includes(firstPart));
                        if (match) {
                            console.log(`   Found instead: ${match}`);
                        } else {
                            // Try deeper fuzzy match
                            const partialMatch = files.find(f => {
                                const sanitizedFile = f.toLowerCase().replace(/[^a-z]/g, '');
                                const sanitizedName = member.name.toLowerCase().replace(/[^a-z]/g, '');
                                return sanitizedFile.includes(sanitizedName) || sanitizedName.includes(sanitizedFile);
                            });
                            if (partialMatch) {
                                console.log(`   Fuzzy Found: ${partialMatch}`);
                            } else {
                                console.log(`   Directory contains:`, files.join(', '));
                            }
                        }
                    } else {
                        console.log(`   Directory doesn't exist: public/${folderPath}`);
                    }
                    missingCount++;
                }
            }
        }
    }
}

console.log(`Total missing: ${missingCount}`);
