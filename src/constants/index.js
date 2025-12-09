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
    id: "projects",
    title: "Projects"
  },
  {
    id: "work",
    title: "Work",
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
  }
];

const testimonials = [
  {
    testimonial:
      "Im Lesedi Lengosane , a fellow classmate and group member of simamnkele for 2 big school projects this year. The most impressive qualities about him as a group member for me are his selflessness and his hands on nature - always willing to do whatever task given , whether it be taking on tedious documentation work , or taking over someones task and even doing his own tasks proficiently and timely most times. He has never been a let down and always prioritises group needs . I personally enjoy working with him because he is understanding and always put the ego and pride aside whenever me and him are working on a joint task , and he is also a very effective communicator at that. One weakness I would say he has is that his work and tasks sometimes slightly deviate from what was asked for or needed  and also probably doing tasks and then not informing other group members which causes an overlapping of work and redundancy at times but he is always willing to fix these issues nonetheless because he is self aware",
    name: "Lesedi Lengosane",
    designation: "student",
    company: "Wits Alumni",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I think you were overall a good mate in the project...You were consistent and always working upto something,the work ethic you had pushed team even in our lazy days you were consistently pushing code and improving the app...the features you implemented worked really well and that was a win for the team and in that profile you managed to incorporate some of our app's best features as well intergrating our App with 3rd party API which helepd us with marks.....You should look to improve the modularity of your code,it was hard to track in which files were you working and this made it difficult for someone to perhabs read ypur code.I think if you work on your modularity and maybe working with the tools within the stack cause I saw that you also introduced patterns of code that we were not following which again made it difficult to understand some of your functions as well as what they achieve but overall you really helped the team and your ability to learn from others and work with everyone seamlessly was great man...💯🫡",
    name: "Phuteho Motloung",
    designation: "student",
    company: "Wits Alumni",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Tshepo Phaswane",
    designation: "student",
    company: "Wits Alumni",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Learnledger",
    description:
      "Web-based school management system that allows uploading of lessons, assignments and exams that both students and parents can see at any time allowing parent to stay up tp date with their children's learning material and progress.",
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
    source_code_link: "https://github.com/SimcitaP/Learnledger",
  },
  {
    name: "subscription tracker",
    description:
      "This is a fully backend-end only project that focuses on managing subscriptions for any software that may need it. It inlcudes authentication, authorization ands subscription management. ",
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
    name: "Seider theatre",
    description:
      "This is a react-native app for web, android and ios for streaming the latest movies for your leisure. This includes an algorithm for finding the trending movies that everyone is looking forward to watching ",
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

export { services, technologies, experiences, testimonials, projects };