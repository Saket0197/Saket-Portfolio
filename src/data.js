import proj1 from "./Assets/Projects/proj1.jpg";
import proj2 from "./Assets/Projects/proj2.jpg";
import proj3 from "./Assets/Projects/proj3.jpg";
import proj4 from "./Assets/Projects/proj4.jpg";
import proj5 from "./Assets/Projects/proj5.jpg";
import proj6 from "./Assets/Projects/proj6.jpg";
import proj7 from "./Assets/Projects/proj7.jpg";

import ihtml from "./Assets/Stack/HTML.jpg";
import icss from "./Assets/Stack/CSS.jpg";
import ijs from "./Assets/Stack/Javascript.svg";
import imongo from "./Assets/Stack/MongoDB.svg";
import iexpress from "./Assets/Stack/Express.jpg";
import ireact from "./Assets/Stack/React.jpg";
import inode from "./Assets/Stack/NodeJs.svg";
import igit from "./Assets/Stack/Git.svg";
import igithub from "./Assets/Stack/Github.jpg";
import ipostman from "./Assets/Stack/Postman.svg";
import iredux from "./Assets/Stack/Redux.svg";
import itailwind from "./Assets/Stack/Tailwind.jpg";

export const allIcons = [
  ihtml,
  icss,
  ijs,
  ireact,
  iredux,
  itailwind,
  iexpress,
  imongo,
  inode,
  igit,
  igithub,
  ipostman,
];

const projData = [
  {
    id: 1,
    projPath: proj1,
    title: "Fullstack Blog App",
    icons: [
      ihtml,
      icss,
      ijs,
      ireact,
      imongo,
      iexpress,
      inode,
      itailwind,
      igit,
      igithub,
      ipostman,
    ],
    description:
      "The Web App allows users to create, edit and delete blogs, with suitable blog covers. The registered users get mail for blogs they create.",
    github: "https://github.com/Saket0197/fullstack-blog-app",
    liveLink: "https://bloggers-blog-app.vercel.app/",
  },

  {
    id: 2,
    projPath: proj2,
    title: "Shopping App",
    icons: [ihtml, icss, ijs, ireact, itailwind, igit, igithub, iredux],
    description:
      "App where users can view list of products by navigating between pages, based on specific category, rating and price. Users can add/remove products from cart, review total price and number of products before checkout.",
    github: "https://github.com/Saket0197/shopping-app",
    liveLink: "https://saket-shopping-app.vercel.app/",
  },

  {
    id: 3,
    projPath: proj3,
    title: "Personal Portfolio",
    icons: [ihtml, icss, ijs, ireact, igit, igithub],
    description:
      "The Website displays the projects that I have developed and the tech stack that I have used to build these projects",
    github: "https://github.com/Saket0197/Saket-Portfolio",
    liveLink: "#",
  },

  {
    id: 4,
    projPath: proj4,
    title: "Health Check Slider",
    icons: [ihtml, icss, ijs, ireact, igit, igithub, itailwind],
    description:
      'The Web App displays various health checks based on different filters and can randomly display info from any of the supported categories, on clicking "Surprise".',
    github: "https://github.com/Saket0197/Health-Check-Slider",
    liveLink: "https://saket0197.github.io/Health-Check-Slider/",
  },

  {
    id: 5,
    projPath: proj5,
    title: "Dev Detective",
    icons: [ihtml, icss, ijs, igit, igithub],
    description:
      "The web app lets you search for any Developer's Github Profile by their username(s).It supports both light and dark mode as per your preference",
    github: "https://github.com/Saket0197/Dev-Detective",
    liveLink: "https://dev-detective-saket0197.vercel.app/",
  },

  {
    id: 6,
    projPath: proj6,
    title: "Weather App",
    icons: [ihtml, icss, ijs, igit, igithub],
    description:
      "Know Your Local Weather or Search Weather of any city across the Globe by its name. The Web App uses OpenWeather API for retrieving real time weather data.",
    github: "https://github.com/Saket0197/WeatherApp",
    liveLink: "https://saket0197.github.io/WeatherApp/",
  },

  {
    id: 7,
    projPath: proj7,
    title: "Tech Blogs",
    icons: [ihtml, icss, ijs, ireact, itailwind, igit, igithub],
    description:
      "Responsive, dual theme SPA for users, who can navigate between pages to view list of all tech blogs, a specific blog with related blogs list and blogs related a specific category or tag.",
    github: "https://github.com/Saket0197/Tech-Blogs",
    liveLink: "https://tech-blogs-saket0197.vercel.app/",
    // "description": 'Generate Strong Passwords for any of your accounts or other applications using password generator app',
  },
];

export default projData;
