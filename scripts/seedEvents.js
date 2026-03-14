import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "AIzaSy_YOUR_API_KEY_HERE-CHANGE_ME",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "mdc-gitam.firebaseapp.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "mdc-gitam",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "mdc-gitam.appspot.com",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "843813970478",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:843813970478:web:75f3af650bd824d5d99ee8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const eventsData = [
  {
    "title": "SIP 2025",
    "description": "The Student Induction Programme 2025 (SIP) presentation by Meta Developer Communities GITAM was conducted on 23rd July from 03:30 PM to 03:45 PM at Yelapradaga Auditorium, GIMSR, introducing freshers to the club’s vision, mission, and role in building a strong technical community on campus. The session highlighted MDC’s journey since January 2023, showcasing its impact through 40+ technical events and 3000+ student participants. Freshers were introduced to the club’s seven domains-Competitive Programming, Web Development, Data Analytics, UI/UX, Content Writing, Public Relations, and Photography, enabling them to explore both technical and creative interests. The team also presented key initiatives such as hackathons, workshops, speaker sessions, networking events, and collaborative activities conducted by the club. Overall, the session encouraged students to join MDC, develop technical skills and actively participate in the campus developer ecosystem.",
    "date": "2025-07-23",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/SIP/IMG_3980.JPG",
      "/photos25-26/SIP/IMG_3981.JPG",
      "/photos25-26/SIP/IMG_3991.JPG",
      "/photos25-26/SIP/IMG_3994.JPG"
    ]
  },
  {
    "title": "HackSplash",
    "description": "The HackSplash Hackathon, hosted by Meta Developer Communities GITAM Visakhapatnam, was conducted on 10th August 2025 from 10:00 AM to 11:00 AM as a one-hour online hackathon on HackerRank. The event featured three competitive coding problems (Easy, Medium, and Hard) designed to assess coding approach, problem-solving efficiency, and implementation skills within a limited time frame. With 292 registrations and 156 active participants, the hackathon witnessed strong and enthusiastic participation across the campus. Rahul Gattu, Sai Shreya Jillela, and Manu Gowda secured the top positions based on their overall performance. The event successfully reinforced competitive coding practice and real-time coding exposure among students at GITAM Visakhapatnam.",
    "date": "2025-08-10",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": []
  },
  {
    "title": "MDC Orientation 2025",
    "description": "The MDC Club Orientation was conducted by Meta Developer Communities GITAM on 11th September 2025 from 04:00 PM to 05:00 PM at VDC Hall-2, welcoming newly inducted members to the community. The session introduced the vision, mission, club hierarchy, and domain structure, helping members understand how MDC operates within the campus tech ecosystem. The leadership team also explained the mentorship structure, standard operating procedures (SOP), member expectations, meeting schedules, and the roadmap of upcoming technical events and initiatives. Important guidelines including the termination policy, code of conduct, and participation requirements were also discussed to ensure clarity and accountability among members. Overall, the orientation established a strong foundation for active participation, collaboration, and growth within MDC GITAM.",
    "date": "2025-09-11",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Orientation/DSC_0130.JPG",
      "/photos25-26/Orientation/DSC_0152.JPG",
      "/photos25-26/Orientation/DSC_0167.JPG"
    ]
  },
  {
    "title": "Who Broke This",
    "description": "Who Broke This?, an offline debugging competition, was conducted by Meta Developer Communities GITAM on 30th September 2025 from 04:00 PM to 05:00 PM at VDC Hall-1. The event focused on analyzing and identifying errors in pseudocode across three difficulty levels (Easy, Medium, and Hard). With 62 registrations and 30 active participants, the competition saw focused and enthusiastic engagement. The session was hosted by Rahul, Bargavi, Tanishq, and Gagan, ensuring smooth coordination throughout. Jatin secured the top position based on accuracy in identifying pseudocode issues, and the event effectively strengthened logical thinking and problem-solving-driven coding practice on campus.",
    "date": "2025-09-30",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Who Broke This/IMG_1537.JPG",
      "/photos25-26/Who Broke This/IMG_1549.JPG",
      "/photos25-26/Who Broke This/IMG_1550.JPG",
      "/photos25-26/Who Broke This/IMG_1551.JPG"
    ]
  },
  {
    "title": "Flappy Fun",
    "description": "Flappy Fun, an immersive hands-on game development session, was conducted by Meta Developer Communities GITAM in collaboration with CXR GITAM on 16th October 2025 from 03:30 PM to 05:00 PM at 4.7 MBA Classroom. The session focused on game development using Unity and C#, covering asset integration, scripting, and core gameplay mechanics. Led by Mohan Tanuj and Srikar, participants actively experimented with code to understand real-time gameplay behavior. With 102 registrations and 60 active attendees, the workshop witnessed strong engagement. By the end of the session, participants built their own Flappy Bird-style game, strengthening hands-on game development skills and practical learning on campus.",
    "date": "2025-10-16",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Flappy Fun/image1.jpg", 
      "/photos25-26/Flappy Fun/image2.jpg"
    ]
  },
  {
    "title": "Data Canvas",
    "description": "Data Canvas: The Art of Data Visualization, an interactive session, was conducted by Meta Developer Communities GITAM on 23rd October 2025 from 04:00 PM to 05:00 PM at 6.8 MBA Classroom. The event focused on data storytelling and visualization techniques, helping participants convert raw data into meaningful insights using common plots. With 147 registrations and 70+ active participants, the session saw strong engagement. The workshop was led by Dandu Hasini, Chandana Priya, and Sri Harsha, covering visualization concepts and hands-on dataset experimentation. Overall, the event effectively strengthened data visualization skills and analytical thinking among students.",
    "date": "2025-10-23",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Data Canvas/IMG_8604.JPG",
      "/photos25-26/Data Canvas/IMG_8605.JPG",
      "/photos25-26/Data Canvas/IMG_8614.JPG",
      "/photos25-26/Data Canvas/IMG_8619.JPG"
    ]
  },
  {
    "title": "Ignition HackSprint",
    "description": "Ignition HackSprint, a competitive coding challenge, was conducted by Meta Developer Communities GITAM on 29th November 2025 from 11:00 AM to 12:00 PM in online mode on the Naukri platform. The event featured three coding problems (Easy, Medium, and Hard) to be solved within 60 minutes, focusing on competitive programming skills and coding efficiency. With 151 registrations and 76 active participants, the challenge saw strong and focused participation. Aki Sri Harsha secured the top position based on overall performance. The event effectively enhanced real-time coding confidence and competitive programming exposure among participants.",
    "date": "2025-11-29",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": []
  },
  {
    "title": "Winter Wave Hackathon",
    "description": "Winter Wave Hackathon, a competitive coding event, was conducted by Meta Developer Communities GITAM on 15th December 2025 from 3:45 PM to 5:30 PM at the 4.7 MBA Classroom, using the Naukri platform. The hackathon featured three I/O-based coding challenges (one Easy and two Medium) covering core concepts such as Strings, Stacks, Queues, and Linked Lists. With 284 registrations and 118 active participants, the event saw strong competitive engagement under strict proctoring. Karri Haasith secured the top position, and the hackathon effectively strengthened coding fundamentals and assessment readiness among participants.",
    "date": "2025-12-15",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Winter Wave Hackathon/DSC_7065.JPG",
      "/photos25-26/Winter Wave Hackathon/DSC_7069.JPG",
      "/photos25-26/Winter Wave Hackathon/DSC_7074.JPG",
      "/photos25-26/Winter Wave Hackathon/DSC_7077.JPG"
    ]
  },
  {
    "title": "PowerBI Workshop",
    "description": "A Power BI Workshop was successfully conducted by Meta Developer Communities GITAM on 29th December 2025 from 04:00 PM to 05:00 PM at the 6.8 MBA Classroom. The session introduced students to data visualization and storytelling using Power BI, highlighting how raw data can be transformed into meaningful insights for decision-making. With 285 registrations and 143 active participants, the workshop saw strong engagement and interest in data analytics. The session was led by Dandu Hasini, Sri Harsha, and Nitish Raj, who covered Power BI fundamentals, industry use cases, and key visuals such as charts, KPIs, slicers, and dashboards. The workshop effectively strengthened data visualization skills and practical understanding of Power BI among participants.",
    "date": "2025-12-29",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Powerbi workshop/DSC_7373.JPG",
      "/photos25-26/Powerbi workshop/DSC_7375.JPG",
      "/photos25-26/Powerbi workshop/DSC_7393.JPG"
    ]
  },
  {
    "title": "Resolution Rumble",
    "description": "Resolution Rumble Hackathon, organized under the Meta Code Quest Series by Meta Developer Communities GITAM, was conducted on 5th January 2026 from 4:00 PM to 5:00 PM at the 3.7 MBA Classroom, using the Naukri coding platform. As the third hackathon in the series, the event featured three easy-to-medium level coding problems based on BFS, DFS, recursion, backtracking, and hashing, aligned with placement-level assessments. With 241 registrations and 105 active participants, the hackathon witnessed strong competitive engagement. Participants tested their problem-solving skills under strict time constraints. Boyi Jayakrishna secured the top position, and the event successfully strengthened competitive coding exposure and placement readiness among students.",
    "date": "2026-01-05",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Resolution Rumble/DSC_1236.jpg",
      "/photos25-26/Resolution Rumble/DSC_1239.jpg",
      "/photos25-26/Resolution Rumble/DSC_1242.jpg",
      "/photos25-26/Resolution Rumble/DSC_1245.jpg"
    ]
  },
  {
    "title": "Code Your Portfolio",
    "description": "Code Your Portfolio, a hands-on web design and development session, was successfully conducted by Meta Developer Communities GITAM on 23rd January 2026 from 04:00 PM to 05:00 PM at the 4.7 MBA Classroom. The event guided participants through designing portfolio layouts in Figma, applying basic UI/UX principles, and building a live portfolio website, offering practical exposure to real-world web development workflows. With 182 registrations and 96 active attendees, the session saw strong engagement and interaction. The workshop was led by Mohan Tanuj, Shreyash, and Aakash, who supported participants throughout the hands-on process. Overall, the event strengthened web development skills, design thinking, and awareness of personal branding among students.",
    "date": "2026-01-23",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Code Your Portfolio/DSC_1779.jpg",
      "/photos25-26/Code Your Portfolio/DSC_1783.jpg"
    ]
  },
  {
    "title": "Heart of Code",
    "description": "Heart of Code Hackathon, the fourth event in the Meta Code Quest Series, was conducted by Meta Developer Communities GITAM on 23rd February 2026 from 3:45 PM to 4:00 PM at the 6.8 MBA Classroom, using the Naukri coding platform. The hackathon featured three coding problems (one Easy and two Medium) centered on DSA concepts such as BFS, DFS, recursion, backtracking, and hashing. With 147 registrations and 70 active participants, the contest created an energetic and focused coding atmosphere. Participants explored different approaches and optimized solutions within the limited time. The event strengthened algorithmic thinking and practical coding experience while continuing the momentum of the Meta Code Quest competitive programming series on campus.",
    "date": "2026-02-23",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Heart of Code/DSC_3632.jpg",
      "/photos25-26/Heart of Code/DSC_3633.jpg",
      "/photos25-26/Heart of Code/DSC_3636.jpg",
      "/photos25-26/Heart of Code/DSC_3639.jpg"
    ]
  },
  {
    "title": "Decode SQL Query",
    "description": "Decode SQL Query, an interactive SQL learning session, was conducted by Meta Developer Communities GITAM on 24th February from 04:00 PM to 05:00 PM at the ICT 306 Classroom. The event introduced participants to SQL fundamentals, command execution, keys, subqueries, sorting and aggregate functions, along with hands-on practice and a live Mentimeter quiz. With 200 registrations and 70 active attendees, the session saw strong engagement and participation. The workshop was delivered by Dandu Hasini, Nitish Raj, and Chandana Priya, guiding students through both concepts and practical demonstrations. Surya Pranav, Manasvi and Jayadev K secured the top positions in the quiz. Overall, the event effectively strengthened database fundamentals and practical SQL understanding among students.",
    "date": "2026-02-24",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Decode SQL Query/IMG_1021.JPG",
      "/photos25-26/Decode SQL Query/IMG_1022.JPG",
      "/photos25-26/Decode SQL Query/IMG_1027.JPG",
      "/photos25-26/Decode SQL Query/IMG_1033.JPG"
    ]
  },
  {
    "title": "8-Hour Hackathon",
    "description": "The 8-Hour Hackathon, organized as part of SHORE 26, was conducted collaboratively by Meta Developer Communities GITAM and Google Developer Groups (GDG) on 28th February 2026 from 08:00 AM to 04:30 PM at Shivaji Auditorium. The hackathon challenged student teams to develop innovative solutions and working prototypes within an eight-hour development window, based on problem statements across domains such as Artificial Intelligence, Machine Learning, Web Development, and digital solutions. Participants worked collaboratively to design, build, and present their solutions, followed by a structured evaluation by judges. Team VEL TRIXX secured the Winner position, while Team DCB Coders emerged as the Runner-Up. The event successfully fostered innovation, teamwork, and rapid problem-solving, providing participants with hands-on experience in real-world product development and technical presentation.",
    "date": "2026-02-28",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/8-Hour Hackathon/DSC01948.JPG",
      "/photos25-26/8-Hour Hackathon/DSC01955.JPG",
      "/photos25-26/8-Hour Hackathon/DSC02030.JPG",
      "/photos25-26/8-Hour Hackathon/DSC02047.JPG"
    ]
  },
  {
    "title": "Prompt Engineering Workshop",
    "description": "The Prompt Engineering Workshop, conducted on 28th February 2026 from 1:00 PM to 4:00 PM, was organized as part of the SHORE 2026 Technical Events in collaboration with the SHORE Technical Team and Meta Developer Communities (MDC). The session was delivered by Sai Sampath Kumar Balivada, who introduced participants to the fundamentals and practical applications of prompt engineering for working with AI and large language models. The workshop covered key techniques such as Zero-shot prompting, Few-shot prompting, Role prompting, Chain-of-Thought prompting, and structured output formatting, helping students understand how effective prompts can improve AI responses. MDC coordinated closely with the SHORE Technical Team, assisting with participant attendance, on-ground classroom operations, and overall event coordination to ensure the smooth conduct of the workshop. Overall, the session provided students with valuable insights into modern AI tools and prompt design strategies.",
    "date": "2026-02-28",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Prompt Engineering Workshop/DSC02179.JPG",
      "/photos25-26/Prompt Engineering Workshop/DSC02181.JPG",
      "/photos25-26/Prompt Engineering Workshop/DSC02206.JPG",
      "/photos25-26/Prompt Engineering Workshop/DSC02221.JPG"
    ]
  },
  {
    "title": "Actuate: Becoming - Beyond the Job Title",
    "description": "Actuate: Becoming - Beyond the Job Title, a leadership and career development session organized by Women Leaders’ Forum in collaboration with Meta Developer Communities GITAM, was conducted on the occasion of International Women’s Day at the 5.7 MBA Seminar Hall from 04:00 PM to 05:30 PM. The session was delivered by Dr. Rojeena Mathew, Director-TMCG, GCGC, who shared insights on leadership, career growth and the importance of shaping one’s journey beyond job titles. She emphasized clarity of goals, resilience in professional environments, effective presentation of one’s work and maintaining balance between career and personal life. Drawing from her 25 years of professional experience, she inspired students to pursue their ambitions with determination, continuous learning and purposeful action.",
    "date": "2026-03-08",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Actuate_ Becoming - Beyond the Job Title/DSC_4825.jpg",
      "/photos25-26/Actuate_ Becoming - Beyond the Job Title/DSC_4833.jpg",
      "/photos25-26/Actuate_ Becoming - Beyond the Job Title/DSC_4840.jpg",
      "/photos25-26/Actuate_ Becoming - Beyond the Job Title/DSC_4875.jpg"
    ]
  },
  {
    "title": "Meta Shut Down",
    "description": "Meta Shut Down Hackathon, the fifth and final event of the Meta Code Quest Series, was conducted by MDC GITAM on 10th March 2026 from 03:45 PM to 05:00 PM at the 6.8 MBA Classroom. As the grand finale of the series, the hackathon featured three coding challenges (one Easy and two Medium) designed to assess participants’ understanding of Data Structures and Algorithms (DSA) concepts. The problems covered topics such as Linked Lists, Stacks, Queues, Recursion, Greedy techniques, Dynamic Programming, and standard cycle-detection algorithms, testing coding efficiency and logical implementation under time constraints. The event saw enthusiastic participation and provided a competitive platform for students to demonstrate the skills developed throughout the Meta Code Quest hackathon series. Overall, the final contest successfully concluded the series by reinforcing consistent coding practice and advanced problem-solving skills among participants.",
    "date": "2026-03-10",
    "domain": "Uncategorized",
    "year": "2025-26",
    "images": [
      "/photos25-26/Meta Shut Down/DSCN8778.JPG",
      "/photos25-26/Meta Shut Down/DSCN8781.JPG",
      "/photos25-26/Meta Shut Down/DSCN8790.JPG",
      "/photos25-26/Meta Shut Down/DSCN8800.JPG"
    ]
  }
];

// Helper to push all events identically.
async function pushEventsToFirestore() {
  const eventsRef = collection(db, "events");
  console.log("Pushing records to database...");
  for (const event of eventsData) {
    try {
      const docRef = await addDoc(eventsRef, {
        ...event,
        createdAt: serverTimestamp(),
      });
      console.log(`Document written with ID: ${docRef.id} - ${event.title}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  process.exit();
}

pushEventsToFirestore();
