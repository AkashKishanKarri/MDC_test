import fs from 'fs';

const rawData = `
Katari Revanth Kumar Chowdary	rkatari@gitam.in	VU21CSEN0300114	7670841281	Technology	BTech-CSEAIML	4	EB	President
Nadamuni Venkata Sai Dhruv	vnadamun@gitam.in	VU21CSEN0300080	9000962938	Technology	BTech-CSEAIML	4	EB	Vice President
Vinnakota Nitish Raj	nvinnako2@gitam.in	VU22CSEN0500110	6304003099	Technology	BTech-CSEDS	3	EB	Secretary
Phaniharam Suraj Subramaniam	sphaniha@gitam.in	VU22CSEN0300088 	9010390690	Technology	BTech-CSEAIML	3	EB	Head of Operations
Khushi Bohra	kbohra@gitam.in	VU22CSEN0300017	6301427521	Technology	BTech-CSEAIML	3	EB	Technical Head
Baishali Baruah	bbaruah@gitam.in	VU22CSEN0300090	8106403930	Technology	BTech-CSEAIML	3	EB	Creative Head
Yash Karnani	ykarnani@gitam.in	VU22CSEN0600097	9960133283
Raj Kunwar	rkunwar@gitam.in	VU22CSEN0100108	78158 56991 
Mansi Singh	msingh8@gitam.in	VU22CSEN0100144	7799914141
Mathala Sai Sindhuja	smathala@gitam.in	2023001092	9000230538
Marupudi Ritvik 	rmarupud@gitam.in	2023004697	7397266012
Palla Jothisk Nandan	jpalla2@gitam.in	2023006299	6304110542
Cherukupalli Ravali Sree Harshini 	rcheruku2@gitam.in	VU22CSEN0101396	8688421446
Manchem Manmohan	mmanchem@gitam.in	VU22CSEN0300182	8977002998
Lokdeep Adimulam	ladimula@gitam.in	2023000356	8886953136
Mohith Pilli	mpilli4@gitam.in	2023004747	9831146899
Rachakonda V S S Gagan	grachako2@gitam.in	2023006325	8978082388
Ankita M Kumar 	akumar8@student.gitam.edu	2024053459	8800729399
Sudheer Sahu	ssahu3@gitam.in	VU22CSEN0100696	9346299230
Velaga Doondi Sampreetha	dvelaga@gitam.in	VU22CSEN0100558	7013445393
Koyena Dutta	kdutta@gitam.in	VU22CSEN0100666	9508541252
Padipurakkal Namish	npadipur@gitam.in	VU22CSEN0500011	9110567207
Ponasanapalli Mohan Tanuj	mponasan@gitam.in	2023000886	9347344965
Snehal Andavarapu 	sandavar@gitam.in	2023002603	8917562924
Putti Pallav Sai Teja	pputti@gitam.in	2023005793	9014552799
Dhruv Sivan	dsivan@student.gitam.edu	2024027003	9392680291
Battula Karthikeya	kbattula3@gitam.in	VU22CSEN0100547	9014920104
Challa Venkata Anirudh	vchalla3@gitam.in	VU22CSEN0100564	7675822599
Sai Praseeda Atluri 	satluri3@gitam.in	VU22CSEN0100594	9182896723
Yarlagadda Abhiram	ayarlaga2@gitam.in	VU22CSEN0500063	9063313555
Mogasala Sunaina	msunaina@gitam.in	2023000988	9912893959
Kesapragada Surya Sanjana	skesapra@gitam.in	VU22CSEN0100230	8331048428
Penmatsa Sathwika	spenmats2@gitam.in	VU22CSEN0100208	9618136294
Shreya Karmakar	skarmaka@gitam.in	VU22CSEN0100350	7995339702
B Bharath	bbolline@gitam.in	VU22CSEN0500149	8247370980
Sravani Kalisetty	skaliset@gitam.in	2023001035	8919424414
Priyanshu P Behera	pbehera@student.gitam.edu	2024030072	8018505809
Motaparthi Janaki Sai Samanvitha	jmotapar@gitam.in	2023001970	8247304693
Ishita Gupta	igupta@gitam.in	2023000273	7205640451
Mohamed Mahaboob Ali	mmohamed@student.gitam.edu	2024006642	9848096151
Pia Solanki Jain	ssolanki@student.gitam.edu	2024010410	7569027497
Sahithi Mounika Patoju	spatoju@gitam.in	VU22BTEN0100008	8688060791
V D S S S Sritej	dvilaman@gitam.in	VU22CSEN0300098	8919387785
Bhagavan Venkata Sri Sai Apuroop Alapati	balapati2@gitam.in	VU22CSEN0300151	9346538919
Ommi Rohan Aditya	rommi@gitam.in	2023000774	9949331404
Boni Rakshak	rboni@gitam.in	2023005120	8074339759
`;

const linkedinData = `Mohith Pilli	mpilli4@gitam.in	Competitive Programming(CP)	
Velaga Doondi Sampreetha 	dvelaga@gitam.in	Product Design(PD)/WebArcs	https://www.linkedin.com/me
Mogasala Sunaina 	msunaina@gitam.in	Content	https://www.linkedin.com/in/sunaina-mogasala-70582b293
Priyanshu P Behera	pbehera@student.gitam.edu	UI/UX	https://www.linkedin.com/in/priyanshu-p-behera-14931a324
Challa Venkata Anirudh	vchalla3@gitam.in	Content	https://www.linkedin.com/in/challa-venkata-anirudh-2607s/
PALLA JOTHISK NANDAN	jpalla2@gitam.in	Analytics/DataVerse	https://www.linkedin.com/in/jothisk-nandan-palla-121368293
RAJ KUNWAR	rkunwar@gitam.in	Analytics/DataVerse	https://www.linkedin.com/in/raj-kunwar25
Penmatsa Sathwika	spenmats2@gitam.in	UI/UX	https://www.linkedin.com/in/sathwika-penmatsa/
BHAGAVAN VENKATA SRI SAI APUROOP ALAPATI	balapati2@gitam.in	Photography	https://www.linkedin.com/in/apuroop-alapati
B Bharath	bbolline@gitam.in	UI/UX	www.linkedin.com/in/bb-bollineni
Lokdeep Adimulam	ladimula@gitam.in	Competitive Programming(CP)	http://www.linkedin.com/in/adimulam-lokdeep
V D S S S SRITEJ 	dvilaman@gitam.in	Photography	https://www.linkedin.com/in/v-d-s-s-s-sritej-b5a196295/
Putti Pallav Sai Teja	pputti@gitam.in	Product Design(PD)/WebArcs	https://www.linkedin.com/in/pallav-sai-teja-b3000326b
Y Abhiram	ayarlaga2@gitam.in	Content	www.linkedin.com/in/y-abhiram
RACHAKONDA V S S GAGAN	grachako2@gitam.in	Competitive Programming(CP)	https://www.linkedin.com/in/gaganrachakonda
Padipurakkal Namish 	npadipur@gitam.in	Product Design(PD)/WebArcs	www.linkedin.com/in/namish-p-69a59b272
SHREYA KARMAKAR	Skarmaka@gitam.in	UI/UX	https://www.linkedin.com/in/shreya-karmakar-110b57259
MATHALA SAI SINDHUJA	smathala@gitam.in	Analytics/DataVerse	https://www.linkedin.com/in/sai-sindhuja-998682293
Cherukupalli Ravali Sree Harshini 	rcheruku2@gitam.in	Competitive Programming(CP)	http://www.linkedin.com/in/ravali-sree-harshini-cherukupalli-979310250
Sahithi Mounika Patoju 	spatoju@gitam.in	Photography	https://www.linkedin.com/in/sahithi-mounika-patoju-004488337
BATTULA KARTHIKEYA	kbattula3@gitam.in	Content	http://linkedin.com/in/karthikeya-battula-46290pr
Manchem Manmohan	mmanchem@gitam.in	Competitive Programming(CP)	www.linkedin.com/in/manmohan-manchem
Mansi Singh	msingh8@gitam.in	Analytics/DataVerse	https://www.linkedin.com/in/mansi-singh-rajput-755332257
Ponasanapalli Mohan Tanuj	mponasan@gitam.in	Product Design(PD)/WebArcs	https://www.linkedin.com/in/mohan-tanuj-09b4221a0
Mohamed Mahaboob Ali 	mmohamed@student.gitam.edu	Public Relations(PR)	https://www.linkedin.com/in/mohamed-mahaboob-ali-900198345
Ishita Gupta 	igupta@gitam.in 	Public Relations(PR)	https://www.linkedin.com/in/ishitagupta0811/
Marupudi Ritvik 	rmarupud@gitam.in	Analytics/DataVerse	https://www.linkedin.com/in/marupudi-ritvik-38613a293
Yash Karnani 	ykarnani@gitam.in	Analytics/DataVerse	https://www.linkedin.com/in/ykarnani07/
Ommi Rohan Aditya 	rommi@gitam.in	Photography	https://www.linkedin.com/in/rohanaditya-rohanadityaommi-796033356
B.Rakshak	rboni@gitam.in	Photography	https://www.linkedin.com/in/boni-rakshak-15b727355
Motaparthi Janaki Sai Samanvitha	jmotapar@gitam.in	Public Relations(PR)	https://www.linkedin.com/in/motaparthi-janaki-sai-samanvitha-201242293
Pia Solanki Jain 	ssolanki@student.gitam.edu	Public Relations(PR)	https://www.linkedin.com/in/pia-solanki-jain-882908311
Sravani kalisetty	skaliset@gitam.in	UI/UX	https://www.linkedin.com/in/sravani-kalisetty-090730293
Snehal Andavarapu 	sandavar@gitam.in	AR/VR	https://www.linkedin.com/in/snehal-andavarapu-83b3b5293
Koyena Dutta	kdutta@gitam.in 	Product Design(PD)/WebArcs	https://www.linkedin.com/in/koyena-dutta-6b8bb5250
Sai Praseeda Atluri	satluri3@gitam.in	Content	https://www.linkedin.com/in/saipraseedaatluri
Sudheer sahu	ssahu3@gitam.in	Product Design(PD)/WebArcs	https://www.linkedin.com/in/sudheer-sahu-97881824b
Dhruv Sivan	dsivan@student.gitam.edu	Product Design(PD)/WebArcs	https://www.linkedin.com/in/dhruv-sivan-54232a324
Ankita M Kumar	akumar8@student.gitam.edu	Competitive Programming(CP)	https://www.linkedin.com/in/ankita-m-kumar-b6a624327
Kesapragada Surya Sanjana 	skesapra@gitam.in	UI/UX	https://www.linkedin.com/in/surya-sanjana-kesapragada`;

const cleanWebLink = (url) => {
    url = url.trim();
    if (!url) return '';
    if (!url.startsWith('http')) {
        return 'https://' + url;
    }
    return url;
};

const profileMap = {}; // Use email as the key

rawData.trim().split('\n').forEach(line => {
    const parts = line.split('\t');
    if (parts.length >= 4) {
        const name = parts[0].trim();
        const email = parts[1].trim();
        // Phone could be separated by space
        let phone = parts.length > 5 ? parts[3] : parts[3];
        if (phone) phone = "+91 " + phone.replace(/\s+/g, '');
        else phone = "";

        profileMap[email] = {
            name,
            phone,
            linkedin: ""
        };
    }
});

linkedinData.trim().split('\n').forEach(line => {
    const parts = line.split('\t');
    if (parts.length >= 3) {
        const email = parts[1].trim();
        const linkedin = parts.length >= 4 ? cleanWebLink(parts[3]) : "";

        if (profileMap[email]) {
            profileMap[email].linkedin = linkedin;
        } else {
            profileMap[email] = {
                name: parts[0].trim(),
                phone: "",
                linkedin
            };
        }
    }
});

let fileContent = fs.readFileSync('/Users/akashkishankarri/Desktop/MDC/mdc/src/data/tenureData.js', 'utf-8');

const lines = fileContent.split('\n');
let in2024Block = false;
const newLines = lines.map(line => {
    if (line.includes('"2024-25": {')) {
        in2024Block = true;
    } else if (line.includes('"2023-24": {')) {
        in2024Block = false;
    }

    if (in2024Block && line.trim().startsWith('{ name: "')) {
        const matchName = line.match(/name:\s*"([^"]+)"/);
        if (matchName) {
            const currentName = matchName[1].trim().toLowerCase();

            // Find in profileMap
            let found = null;
            let currentEmail = "";

            for (const [email, data] of Object.entries(profileMap)) {
                const mapName = data.name.toLowerCase();
                if (mapName === currentName ||
                    (currentName === "boni rakshak" && mapName === "b.rakshak") ||
                    (currentName === "vdsssrtej" && mapName.includes("sritej")) ||
                    currentName.replace(/\s+/g, "") === mapName.replace(/\s+/g, "") ||
                    currentName.split(" ").reverse().join(" ") === mapName ||
                    mapName.includes(currentName.split(" ")[0]) && mapName.includes(currentName.split(" ").slice(-1)[0])
                ) {
                    found = data;
                    currentEmail = email;
                    break;
                }
            }

            if (found) {
                let propsLine = line;
                propsLine = propsLine.replace(/,\s*email:\s*"[^"]*"/g, '');
                propsLine = propsLine.replace(/,\s*phone:\s*"[^"]*"/g, '');
                propsLine = propsLine.replace(/,\s*linkedin:\s*"[^"]*"/g, '');

                propsLine = propsLine.replace(/\s*},\s*$/g, '');

                let appendProps = `, email: "${currentEmail}"`;
                if (found.phone) appendProps += `, phone: "${found.phone}"`;
                if (found.linkedin) appendProps += `, linkedin: "${found.linkedin}"`;

                return propsLine + appendProps + " },";
            }
        }
    }
    return line;
});

fs.writeFileSync('/Users/akashkishankarri/Desktop/MDC/mdc/src/data/tenureData.js', newLines.join('\n'));
console.log('Update complete.');
