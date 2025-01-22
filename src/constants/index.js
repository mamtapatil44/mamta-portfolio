import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HOME_CONTENT = `I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications. With hands-on experience in both front-end technologies like React and Angular, as well as back-end technologies like Node.js, I have honed my skills in building end-to-end solutions. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. As an experienced developer, I have worked with a variety of technologies, including Angular, React.js and Node.js.

My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May,2024 - Dec,2024",
    role: "Freelancer (Fullstack Developer)",
    company: "Bimride",
    description: `Lead a team in developing and maintaining admin portal
    using angular17, tailwind css. Designed and developed GraphQL APIs that allow communication between the front end and the back end.`,
    technologies: ["Angular17", "TailwindCss", "NodeJS"],
  },
  {
    year: "Nov,2022 - Jan,2024",
    role: "System Engineer",
    company: "Tata Consultancy Services,Pune",
    description: `Lead a team in developing and maintaining web applications 
    using JavaScript, React.JS, CSS. Implemented RESTful APIs and integrated with MongoDB databases. 
    Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "CSS"],
  },
  {
    year: "Feb,2022 -  Nov,2022",
    role: "Software Engineer",
    company: "iProgrammer Solutions Private Ltd,Pune",
    description: `Designed and developed user interfaces for web applications using Next.js and React. 
    Worked closely with backend developers to integrate frontend components with Node.js APIs. 
    Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Angular", "Bootstrap","React.Js"],
  },
  {
    year: "Sept,2019 - Sept,2021",
    role: "Software Engineer",
    company: "Anka Technology Solutions Private Ltd,Pune",
    description: `Developed and maintained web applications using JavaScript, React.js, and 
    Node.js, Angular 6+. Designed and implemented RESTful APIs for data communication. 
    Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Angular", "React.Js", "Bootstrap", "Material"],
  },
  {
    year: "July,2017 - Dec,2018",
    role: "Associate Professor",
    company: "NMCOE,Pethanaka",
    description: `Worked as teaching assitant.`,
    technologies: ["RAC", "TQM"],
  },
];

export const PROJECTS = [

 
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart.",
    technologies: ["HTML", "React", "Redux-toolkit","Tailwind", "Firebase"],
    url:"https://redux-shopping-cart-6ff0f.web.app/"
  },
  {
    title: "NetFlix-GPT",
    image: project3,
    description:
      "Netflix-GPT is a project where the goal is to clone the Netflix platform and enhance it with the power of GPT, like OpenAI's GPT models, to improve user experience, search capabilities, or even integrate conversational features.",
    technologies: ["HTML", "React", "TailwindCSS","TMDB api","Firebase"],
    url:'https://netflix-gpt-git-main-mamtapatil44s-projects.vercel.app/'
  },
  {
    title: "Youtube-clone",
    image: project4,
    description:
      "A YouTube Clone project typically involves building a platform that mimics the core features of YouTube, such as video viewing along with recommondations. ",
    technologies: ["React.Js", "TailwindCss", "Youtube-Public-API"],
    url:'https://youtube-clone-git-main-mamtapatil44s-projects.vercel.app/'
  },
  {
    title: "Food Ordering App",
    image: project2,
    description:
      "A Food Ordering App is a platform that allows users to browse restaurants, select food items, place orders, and get food delivered.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    url:'https://moms-food-9d0e6.web.app/'
  },
];

export const CONTACT = {
  address: "Sandy Spring, Atlanta, GA 30328 ",
  email: "mamtapatil44@gmail.com",
};
