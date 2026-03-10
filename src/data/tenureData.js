// Tenure data configuration
// Maps year -> domains -> members (with photo paths in public folder)
// To add members: place photos in the corresponding public folder and add entries here

const domainColors = {
    EB: { bg: "from-blue-600 to-indigo-600", light: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
    WebArcs: { bg: "from-cyan-500 to-blue-600", light: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
    DataVerse: { bg: "from-purple-500 to-indigo-600", light: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
    CP: { bg: "from-amber-500 to-orange-600", light: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
    Content: { bg: "from-emerald-500 to-teal-600", light: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
    Design: { bg: "from-pink-500 to-rose-600", light: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
    PR: { bg: "from-violet-500 to-purple-600", light: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
    Photography: { bg: "from-teal-500 to-cyan-600", light: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
    ARVR: { bg: "from-red-500 to-orange-600", light: "bg-red-50", text: "text-red-700", border: "border-red-200" },
}

const domainLabels = {
    EB: "Executive Board",
    WebArcs: "Web Arcs",
    DataVerse: "Data Verse",
    CP: "Competitive Programming",
    Content: "Content",
    Design: "Design",
    PR: "Public Relations",
    Photography: "Photography",
    ARVR: "AR / VR",
}

// Helper: build image path from folder convention
// e.g., year "2025-26", folderPrefix "25_26", domain "EB" → "/25_26/EB_25-26/NAME.jpg"
function buildPath(folderPrefix, domain, yearSuffix, name, ext = "jpg") {
    return `/${folderPrefix}/${domain}_${yearSuffix}/${name}.${ext}`
}

const tenureData = {
    "2025-26": {
        folderPrefix: "25_26",
        yearSuffix: "25-26",
        domains: ["EB", "WebArcs", "DataVerse", "CP", "Content", "Design", "PR", "Photography"],
        members: {
            EB: [
                { name: "VINNAKOTA NITISH RAJ", role: "President" },
                { name: "PALLA JOTHISK NANDAN", role: "Vice President" },
                { name: "RACHAKONDA V S S GAGAN", role: "Secretary", ext: "webp" },
                { name: "SNEHAL ANDAVARAPU", role: "Treasurer" },
                { name: "SRAVANI KALISETTY", role: "Joint Secretary" },
                { name: "ISHITA GUPTA", role: "Joint Secretary" },
            ],
            WebArcs: [
                { name: "PONASANAPALLI MOHAN TANUJ", role: "Lead" },
                { name: "KARRI AKASH KISHAN", role: "Member" },
                { name: "GANNE ROHAN", role: "Member" },
                { name: "KONA SUMANTTH", role: "Member" },
                { name: "MOHAMED MAHABOOB ALI", role: "Member" },
                { name: "PANANGIPALLI ABHISHIEK", role: "Member" },
                { name: "PILLA PRAVEEN", role: "Member" },
                { name: "SHREYASH MASTOLI", role: "Member" },
            ],
            DataVerse: [
                { name: "AKI SRI HARSHA", role: "Lead" },
                { name: "DANDU HASINI", role: "Member" },
                { name: "KORADA CHANDANA PRIYA", role: "Member" },
                { name: "KORUPALLI SAI NAVYA SRI", role: "Member" },
                { name: "MATHALA SAI SINDHUJA", role: "Member" },
                { name: "PALAPARTHI VENKATA VIKAS", role: "Member" },
            ],
            CP: [
                { name: "AYYAGARI RAHUL NIYOGI", role: "Lead" },
                { name: "D BHARGAVI", role: "Member" },
                { name: "DADI DIVYA SREE", role: "Member" },
                { name: "GAJJALA JASWITHA REDDY", role: "Member" },
                { name: "KUNDRAPU TANISHQ", role: "Member" },
                { name: "MOMMINEEDI NAVYASREE DURGA", role: "Member" },
            ],
            Content: [
                { name: "IPPILI SAI PHANENDRA", role: "Lead" },
                { name: "KANTIPUDI SAI PRANEETHA", role: "Member" },
                { name: "POOSAPATI RAINA SAI SREE", role: "Member" },
                { name: "SIRAVURI LASYA VARMA", role: "Member", ext: "png" },
            ],
            Design: [
                { name: "AFREEN NAAZ ALI", role: "Lead" },
                { name: "ALLU SATYA SAMEEKSHA", role: "Member" },
                { name: "ANANTHAPU RESHWANTH", role: "Member" },
                { name: "GANDI GNANA PRASOONA", role: "Member" },
                { name: "SAMUEL VAIBHAV RAGAM", role: "Member" },
            ],
            PR: [
                { name: "BUDDHA TANVI", role: "Lead" },
                { name: "JAMMU JASSMITHA", role: "Member" },
                { name: "MOTAPARTHI JANAKI SAI SAMANVITHA", role: "Member" },
                { name: "PENUGONDA MANMAYI", role: "Member" },
                { name: "PIA SOLANKI JAIN", role: "Member" },
                { name: "POSAM ADRIJA", role: "Member" },
            ],
            Photography: [
                { name: "AMBATI HARI NAGA TEJA", role: "Lead" },
                { name: "ANNABATHULA JAABILY SRILEKHA", role: "Member" },
                { name: "ANUKRITI TEEGALA", role: "Member" },
                { name: "PALURU ARAVIND KUMAR", role: "Member" },
                { name: "SWAMIREDDY PAVAN DURGA KARTHIK", role: "Member" },
            ],
        },
    },
    "2024-25": {
        folderPrefix: "24_25",
        yearSuffix: "24-25",
        domains: ["EB", "WebArcs", "DataVerse", "CP", "Content", "Design", "PR", "Photography"],
        members: {
            EB: [],
            WebArcs: [],
            DataVerse: [],
            CP: [],
            Content: [],
            Design: [],
            PR: [],
            Photography: [],
        },
    },
    "2023-24": {
        folderPrefix: "23_24",
        yearSuffix: "23-24",
        domains: ["EB", "WebArcs", "DataVerse", "CP", "Content", "Design", "PR", "Photography", "ARVR"],
        members: {
            EB: [],
            WebArcs: [],
            DataVerse: [],
            CP: [],
            Content: [],
            Design: [],
            PR: [],
            Photography: [],
            ARVR: [],
        },
    },
    "2022-23": {
        folderPrefix: "22_23",
        yearSuffix: "22-23",
        domains: ["EB", "WebArcs", "DataVerse", "CP", "Content", "Design", "PR", "Photography", "ARVR"],
        members: {
            EB: [],
            WebArcs: [],
            DataVerse: [],
            CP: [],
            Content: [],
            Design: [],
            PR: [],
            Photography: [],
            ARVR: [],
        },
    },
}

// Convert "FIRSTNAME LASTNAME" → "Firstname Lastname"
function formatName(raw) {
    return raw
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
}

// Build full member data with image paths
export function getTenureMembers(year) {
    const data = tenureData[year]
    if (!data) return []

    return data.domains.map(domain => ({
        domain,
        label: domainLabels[domain] || domain,
        colors: domainColors[domain] || domainColors.EB,
        members: (data.members[domain] || []).map(entry => {
            const memberName = typeof entry === "string" ? entry : entry.name
            const ext = typeof entry === "string" ? "jpg" : (entry.ext || "jpg")
            const role = typeof entry === "string" ? "Member" : (entry.role || "Member")
            return {
                name: formatName(memberName),
                role,
                img: buildPath(data.folderPrefix, domain, data.yearSuffix, memberName, ext),
            }
        }),
    }))
}

export function getDomainsForYear(year) {
    return tenureData[year]?.domains || []
}

export { domainColors, domainLabels }
