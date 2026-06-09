import {
  mobile,
  backend,
  Data,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
//  meta,
//  starbucks,
//  tesla,
//  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  /*{
    title: "React Native Developer",
    icon: mobile,
  },*/
  {
    title: "Game Developer",
    icon: backend,
  },
  /*{
    title: "Machine Learning",
    icon: Data,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },*/
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
 /* {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
  {
    id: "wits-tutor",
    title: "Wits Tutor",
    company_name: "Universityt of the Witwatersrand",
    icon: Data,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Nov 2025",
    points: [
      "Tutoring students in Applied Mathematics and Computer Science.",
      "Invigilating exams and ensuring academic integrity.",
      "Marking tests and assignments.",
    ],
    detailedDescription: "As a Wits Tutor, my responsibilities included providing one-on-one and group support to students tackling difficult concepts in Applied Mathematics and Computer Science. I facilitated an engaging continuous learning structure while executing administrative tasks such as marking tests and invigilating exams to uphold academic standards.",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    company_name: "Medical Consortium of Africa",
    icon: Data,
    iconBg: "#E6DEDD",
    date: "Dec 2025 - Present",
    points: [
      "Collecting, processing, and performing statistical analyses on large datasets to identify trends and patterns.",
      "Creating data visualizations and reports to communicate findings to stakeholders.",
      "Collaborating with cross-functional teams to understand business requirements and provide data-driven insights.",
      "Utilizing tools such as SQL, Python, and Tableau to analyze and visualize data effectively.",
    ],
    detailedDescription: "As a Data Analyst at the Medical Consortium of Africa, I am responsible for the end-to-end data lifecycle from collection to visual reporting. Utilizing SQL, Python, and Tableau, I conduct extensive statistical analyses to uncover trends in large datasets. I collaborate directly with stakeholders to align data insights with business goals, ensuring well-informed decision-making processes.",
  }
];

const certificates = [
  {
    id: "genai-course",
    name: "GenAI Course for Software Engineers",
    issuer: "WeThinkCode_",
    date: "13 February 2026",
    description: "Advanced course focusing on integrating Generative AI into the software development lifecycle.",
    image: "./Simamnkele Mlisana",
    link: "../assets/Simamnkele Mlisana.pdf",
  },
];

const testimonials = [
  {
    testimonial:
      "Im Lesedi Lengosane , a fellow classmate and group member of simamnkele for 2 big school projects this year. The most impressive qualities about him as a group member for me are his selflessness and his hands on nature - always willing to do whatever task given , whether it be taking on tedious documentation work , or taking over someones task and even doing his own tasks proficiently and timely most times. He has never been a let down and always prioritises group needs . I personally enjoy working with him because he is understanding and always put the ego and pride aside whenever me and him are working on a joint task , and he is also a very effective communicator at that. One weakness I would say he has is that his work and tasks sometimes slightly deviate from what was asked for or needed  and also probably doing tasks and then not informing other group members which causes an overlapping of work and redundancy at times but he is always willing to fix these issues nonetheless because he is self aware",
    name: "Lesedi Lengosane",
    designation: "student",
    company: "Wits Alumni",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I think you were overall a good mate in the project...You were consistent and always working upto something,the work ethic you had pushed team even in our lazy days you were consistently pushing code and improving the app...the features you implemented worked really well and that was a win for the team and in that profile you managed to incorporate some of our app's best features as well intergrating our App with 3rd party API which helepd us with marks.....You should look to improve the modularity of your code,it was hard to track in which files were you working and this made it difficult for someone to perhabs read ypur code.I think if you work on your modularity and maybe working with the tools within the stack cause I saw that you also introduced patterns of code that we were not following which again made it difficult to understand some of your functions as well as what they achieve but overall you really helped the team and your ability to learn from others and work with everyone seamlessly was great man...💯🫡",
    name: "Phuteho Motloung",
    designation: "student",
    company: "Wits Alumni",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have had the opportunity to work with Sima in many projects in university, his desire to constantly learn even under pressure is something I admire about him, he has great communication skills and knows when to ask for help. Overall he’s a fantastic team player and a great friend too",
    name: "Tshepo Phaswane",
    designation: "student",
    company: "Wits Alumni",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    id: "learnledger",
    name: "Learnledger",
    description:
      "Web-based school management system that allows uploading of lessons, assignments and exams that both students and parents can see at any time allowing parent to stay up tp date with their children's learning material and progress.",
    techStack: ["NextJS", "Supabase", "Tailwind CSS", "PostgreSQL"],
    methodology: "Agile/Scrum with bi-weekly sprints and continuous integration.",
    problem: "Parents often feel disconnected from their child's daily classroom progress and resource accessibility.",
    solution: "Created a centralized hub where lessons and assignments are updated in real-time, providing a transparent window for parents into the curriculum.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SimcitaP/learnledger",
  },
  {
    id: "subscription-tracker",
    name: "subscription tracker",
    description:
      "This is a fully backend-end only project that focuses on managing subscriptions for any software that may need it. It inlcudes authentication, authorization ands subscription management. This uses ExpressJS for the backend server and mongoDB for the database management.",
    techStack: ["ExpressJS", "MongoDB", "REST API", "JSON Web Tokens"],
    methodology: "Backend-driven development using MVC pattern and RESTful practices.",
    problem: "Managing dynamic software subscriptions with clean secure authorization.",
    solution: "Built a complete backend API server implementing robust JWT-based authorization and subscription status checkers.",
    tags: [
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SimcitaP/subscription-tracker",
  },
  {
    id: "university-research-hub",
    name: "University Research Hub",
    description:
      "A collaborative platform designed for students, researchers, and institutions to connect, share ideas, and work together on research projects. It supports project creation, team collaboration, document sharing, version control, and role-based access. Built to streamline academic collaboration and foster innovation across universities.",
    techStack: ["NextJS", "NodeJS", "PostgreSQL", "Tailwind CSS"],
    methodology: "Collaborative workflow design using agile methodologies.",
    problem: "Students and researchers lack a unified space to connect and collaborate on academic research projects.",
    solution: "Created a platform that integrates role-based team management, secure document sharing, and academic project tracking.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Scholarsphere100/ScholarSphere",
  },
  {
    id: "hoopmania",
    name: "HoopMania",
    description:
      "A modern basketball statistics tracking platform that provides real-time and historical player and team performance analytics. It includes dashboards, advanced stat visualizations, player comparisons, and predictive analytics to help fans, coaches, and analysts gain deeper insights into the game.",
    techStack: ["React", "ChartJS", "Tailwind CSS", "Sports Statistics API"],
    methodology: "Dashboard-oriented development focus on high-fidelity visual representations.",
    problem: "Traditional basketball stat trackers are text-heavy and fail to display trend lines or performance over time.",
    solution: "Built interactive chart dashboards using ChartJS to visualize team metrics, player performance, and predictive statistics.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "ChartJS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Cipher-Pol-Aigis-Zero/sport-stat-tracker",
  },
  {
    id: "spendly",
    name: "Spendly",
    description:
      "An intelligent financial habits tracking application that goes beyond simple expense tracking. Spendly leverages AI to analyze spending patterns, predict future habits, recommend smarter financial decisions, and suggest stores that offer the best value for money. It helps users build better financial discipline and achieve long-term financial goals.",
    techStack: ["Python", "AI", "FinTech", "Flask", "React"],
    methodology: "Data science combined with frontend application dashboards.",
    problem: "Budget apps only catalog historical expenses without providing actionable financial advice.",
    solution: "Created an AI-driven budgeting application that predicts spending habits and recommends cost-effective store alternatives.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "FinTech",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AI-Aveng3rs/spendly",
  },
  {
    id: "seider-theatre",
    name: "Seider theatre",
    description:
      "This is a react-native app for web, android and ios for streaming the latest movies for your leisure. This includes an algorithm for finding the trending movies that everyone is looking forward to watching ",
    techStack: ["React Native", "Appwrite", "Nativewind", "TMDB API"],
    methodology: "Mobile-first responsive design matching Android/iOS guidelines.",
    problem: "A lack of clean, fast movie recommendation and streaming client applications.",
    solution: "Created a React Native app integrating TMDB API and Appwrite backends for seamless, trending movie streaming.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SimcitaP/movies",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };