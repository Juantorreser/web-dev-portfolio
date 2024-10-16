//Resume Info
const profile = {
  age: 20,
  city: "Victoria, BC",
  email: "Jdtorreser@gmail.com",
};
const softSkills = ["Teamwork", "Adaptability", "Communication", "Leadership"];
const languages = ["English", "Spanish"];
const education = [
  {title: "Information & Computer Systems", location: "Victoria, BC", start: 2023, end: 2025},
];
const experience = [{title: "Spotynet, Mexico City", desc: "Description", start: 2022, end: 2024}];
const technicalSkills = [
  {name: "HTML", rating: 9},
  {name: "CSS", rating: 9},
  {name: "Tailwind CSS", rating: 9},
  {name: "Javascript", rating: 8},
  {name: "React Js", rating: 7},
  {name: "Next Js", rating: 6},
  {name: "Wordpress", rating: 5},
  {name: "React Native", rating: 4},
  {name: "Java", rating: 4},
  {name: "Python", rating: 4},
];

export const ResumeInfo = {profile, softSkills, languages, education, experience, technicalSkills};
// End of Resume Info

//Projects
export const projects = [
  {
    name: "Security Transportation Tracking Web-App",
    stack: "React | TailwindCSS | Express | Node.js | MongoDB",
    codeLink: "",
    liveLink: "",
    image: "/intacsep.png",
  },
  {
    name: "Video Editor Portfolio",
    stack: "HTML5 | CSS | Tailwind | React | Typescript",
    codeLink: "https://github.com/Juantorreser/video-portfolio",
    liveLink: "https://juantorreser.github.io/video-portfolio/",
    image: "/videoEditor.png",
  },
  {
    name: "Airline Flights Dashboard",
    stack: "HTML5 | CSS | Javascript | Bootstrap",
    codeLink: "https://github.com/Juantorreser/airline-dashboard",
    liveLink: "https://juantorreser.github.io/airline-dashboard/",
    image: "/airline.png",
  },
  // {
  //   name: "Delivery Food Web-App",
  //   stack: "React | Tailwind | Express | Node.js | MongoDB",
  //   codeLink: "#",
  //   liveLink: "#",
  //   image: "",
  // },
];

//END of Projects
