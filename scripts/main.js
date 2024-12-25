import { getDb } from './db.js';
import { fetchAndStoreAppSwitches, fetchIpAddress, fetchIpData, validateAndPushClientData } from './sourceCollector.js';
import { techStack } from './techstack.js';
import { createExperienceCards, createSkills, createEducation } from "./experience.js";
import { printLog, setNavBarTitle } from './appUtils.js';
const experienceData = [
    {
        orgName: "Western Union",
        logo: "assets/images/devs/Western-Union-Logo.png",
        title: "Software Developer",
        type: "Full-time",
        duration: "Jan 2023 - Aug 2024 (2 years)",
        responsibilities: [
            "Contributed to developing and maintaining the Western Union POS retail application, ensuring seamless functionality and performance.",
            "Developed Point Of Sale Development Utility, which boosted developer efficiency by 70%.",
            "Collaborated in the migration of WUPOS from Apache Tapestry to Angular 14, resulting in a 15% increase in revenue, significant improvements in both agent and user experience, and expanded market share through modernized front-end architecture.",
            "Executed a Test-Driven Development (TDD) strategy within teams using the Playwright framework."
        ]
    },
    {
        orgName: "MindsClik Digital Solutions",
        logo: "assets/images/devs/mindsclik.png",
        title: "Software Engineer",
        type: "Part-time",
        duration: " June 2022 – February 2023 (8 months)",
        responsibilities: [
            "Developed a white-labeled e-commerce solution, which evolved into a core product offering.",
            "Introduced and integrated Flutter as a new application stack, resulting in enhanced performance and increased development productivity.",
        ]
    },
    {
        orgName: "LinkCode Technologies",
        logo: "assets/images/devs/linkcode.png",
        title: "Full-Stack Developer",
        type: "Part-time",
        duration: "  January 2021 – June 2022 (1 year 7 months)",
        responsibilities: [
            "Designed the architecture for the LinkCode LMS, driving the organization’s digital transformation and resulting in a 35% increase in revenue.",
            "Managed a team of 10 developers, overseeing the collective development and implementation of the software.",
            "Migrated the entire infrastructure to a server-less architecture using AWS Lambda, enhancing scalability and cost-efficiency.",
            "Implemented Web-RTC for video conferencing, improving real-time communication capabilities.",
            "Established CI/CD pipelines with Jenkins, optimizing development workflows and deployment processes."

        ]
    },
    {
        orgName: "Aitheon",
        logo: "assets/images/devs/aitheon.svg",
        title: "Full-Stack Developer",
        type: "Internship",
        duration: "  April 2021 – Jan 2022 (1 year 7 months)",
        responsibilities: [
            "Created a no-code application development platform using Visual Studio Web, Node.js, Node-RED, and Vue.js, enabling users to create applications without traditional coding.",
            "Development of IoT applications leveraging Robot Operating Systems, NVIDIA Jetson Nano, and Code-Studio.",
        ]
    }
];

const client_side_skills = [
    {
        name: 'HTML5',
        img: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'CSS3',
        img: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'JS',
        img: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'Bootstrap',
        img: 'https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'UIKit',
        img: 'https://img.icons8.com/?size=100&id=BQbKONe0owd3&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'Tailwind Css',
        img: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'Angular',
        img: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'React',
        img: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'Vue',
        img: 'https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000',
        type: 'client-side',
    },
    {
        name: 'Flutter',
        img: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000',
        type: 'mobile-desktop'
    },
    {
        name: 'Tauri',
        img: 'https://icon.icepanel.io/Technology/svg/Tauri.svg',
        type: 'mobile-desktop'
    },
    {
        name: 'Electron',
        img: 'https://www.electronjs.org/assets/img/logo.svg',
        type: 'mobile-desktop'
    },
    {
        name: 'Ionic',
        img: 'https://img.icons8.com/?size=100&id=MOXQrrrUbTVA&format=png&color=000000',
        type: 'mobile-desktop'
    },
    {
        name: 'Xamarin',
        img: 'https://img.icons8.com/?size=100&id=38641&format=png&color=000000',
        type: 'mobile-desktop'
    },
    {
        name: 'Android',
        img: 'https://img.icons8.com/?size=100&id=17836&format=png&color=000000',
        type: 'mobile-desktop'
    },
    {
        name: 'Django',
        img: 'https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000',
        type: 'server-side'
    },
    {
        name: 'Node.js',
        img: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000',
        type: 'server-side'
    },
    {
        name: 'Express.js',
        img: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF',
        type: 'server-side'
    },
    {
        name: 'Spring Boot',
        img: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000',
        type: 'server-side'
    },
    {
        name: 'Docker',
        img: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000',
        type: 'dev'
    },
    {
        name: 'Python',
        img: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'Firebase',
        img: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000',
        type: 'db'
    },
    {
        name: 'Java',
        img: 'https://img.icons8.com/?size=100&id=GPfHz0SM85FX&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'Dart',
        img: 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'Rust',
        img: 'https://img.icons8.com/?size=100&id=XWesbnSd4AUa&format=png&color=FA5252',
        type: 'pl'
    },
    {
        name: 'C',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png',
        type: 'pl'
    },
    {
        name: 'C++',
        img: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'PHP',
        img: 'https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'SQL',
        img: 'https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'MySQL',
        img: 'https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF',
        type: 'db'
    },
    {
        name: 'MongoDB',
        img: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000',
        type: 'db'
    },
    {
        name: 'PostgreSQL',
        img: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
        type: 'db'
    },
    {
        name: 'Oracle DB',
        img: 'https://img.icons8.com/?size=100&id=39913&format=png&color=000000',
        type: 'db'
    },
    {
        name: 'SQLite',
        img: 'https://img.icons8.com/?size=100&id=yjSayFwWHyCo&format=png&color=FFFFFF',
        type: 'db'
    },
    {
        name: 'Ngnix',
        img: 'https://img.icons8.com/?size=100&id=LhQ8M0RI4YLP&format=png&color=000000',
        type: 'server-side'
    },
    {
        name: 'Apache',
        img: 'https://img.icons8.com/?size=100&id=QFcVqyh6lBh6&format=png&color=000000',
        type: 'server-side'
    },
    {
        name: 'Git',
        img: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
        type: 'dev'
    },

    {
        name: 'Jenkins',
        img: 'https://img.icons8.com/?size=100&id=39292&format=png&color=000000',
        type: 'dev'
    },
    {
        name: 'Selenium',
        img: 'https://img.icons8.com/?size=100&id=TLI9oiMzpREF&format=png&color=000000',
        type: 'dev'
    },
    {
        name: 'Playwright',
        img: 'https://playwright.dev/img/playwright-logo.svg',
        type: 'dev'
    },
    {
        name: 'Kafka',
        img: 'https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000',
        type: 'dev'
    },
    {
        name: 'Kubernetes',
        img: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000',
        type: 'dev'
    },
    {
        name: 'Kotlin',
        img: 'https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000',
        type: 'pl'
    },
    {
        name: 'FastAPI',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_3MFhCzXcwI3GWIDTsWJg2HXDTG7TwGovA&s',
        type: 'server-side'
    },
    {
        name: 'Nest.js',
        img: 'https://static-00.iconduck.com/assets.00/nestjs-icon-1024x1020-34exj0g6.png',
        type: 'server-side'
    },
    {
        name: 'Flask',
        img: 'https://img.icons8.com/?size=100&id=hCWb1IvpcBZ0&format=png&color=000000',
        type: 'server-side'
    },
    {
        name: 'AWS',
        img: 'https://img.icons8.com/?size=100&id=AtEKkdldZfri&format=png&color=FFFFFF',
        type: 'dev'
    },
    {
        name: 'VS Code',
        img: 'https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000',
        type: 'dev'
    },

]


const education = [
    {
        uniName: "Arizona State University",
        img: "https://aci.az.gov/sites/default/files/media/ASU-logo.png",
        degree: "Master of Software Engineering",
        country: "United States of America",
        countryImg: "https://img.icons8.com/?size=30&id=15532&format=png&color=000000",
        duration: "Aug 2024 - May 2026"
    },
    {
        uniName: "SavitriBai Phule Pune University",
        img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png",
        degree: "Bachelor of Computer Engineering",
        country: "India",
        countryImg: "https://img.icons8.com/?size=30&id=32584&format=png&color=000000",
        duration: "Aug 2019 - May 2023"
    },
    {
        uniName: "Youtube",
        img: "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg",
        degree: "Self Learner ",
        country: "Global (Online)",
        countryImg: "https://img.icons8.com/?size=30&id=3685&format=png&color=000000",
        duration: "2019 - Present"
    }
]


function currentYear() {
    const yearnow = document.getElementById("yearnow");
    yearnow.innerHTML = new Date().getFullYear()
}


async function initializeNucleofy() {
    printLog("Initializing Nucleofy....");
    printLog("Establishing DB Connection....");
    let db = getDb();
    fetchAndStoreAppSwitches(db);
    setNavBarTitle();

    createExperienceCards(experienceData);
    currentYear();
    const skillRow = document.getElementById("mySkills");
    createSkills(client_side_skills, 'client-side', 'Client Side Web Technologies', skillRow);
    createSkills(client_side_skills, 'pl', 'Programming & Scripting Languages', skillRow);
    createSkills(client_side_skills, 'server-side', 'Server-Side Backend Technologies', skillRow);
    createSkills(client_side_skills, 'dev', 'Other Developer Tools & Cloud Services', skillRow);
    createSkills(client_side_skills, 'mobile-desktop', 'Desktop and Mobile App Development', skillRow);
    createSkills(client_side_skills, 'db', 'SQL / No-SQL Database Technologies', skillRow);

    createEducation(education, document.getElementById("education-list"));

    //wolverine tech stack
    const wolverineStack = document.getElementById("wolverine-stack");
    techStack(wolverineStack, "Wolverine Tech Stack", ['Electron', 'Node.js', 'Vue', 'UIKit'], client_side_skills);

    //Code Studio Tech Stack 
    const codeStudioTechStack = document.getElementById("codeStudioTechStack");
    techStack(codeStudioTechStack, "Code Studio Tech Stack", ['Node.js', 'JS', 'Bootstrap', 'Docker'], client_side_skills);

    //POS Dev stack
    const posdevTechStack = document.getElementById("posdevTechStack");
    techStack(posdevTechStack, "POS Dev Utility Tech Stack", ['Node.js', 'Tauri', 'Angular', 'Bootstrap'], client_side_skills);

    //crypto-stack
    const cryptostack = document.getElementById("crypto-stack");
    techStack(cryptostack, "Crypto Track Tech Stack", ['Python', 'Flutter', 'Firebase'], client_side_skills)

    const ipDetails = await fetchIpData("cb5dee916cc6f967093816bff6eb843fdfa97826fe476d9d02d714c7");
    await validateAndPushClientData(db, ipDetails);

}


initializeNucleofy();














