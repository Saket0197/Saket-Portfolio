import proj2 from './Assets/Projects/proj2.jpg';
import proj3 from './Assets/Projects/proj3.jpg';
import proj4 from './Assets/Projects/proj4.jpg';
import proj5 from './Assets/Projects/proj5.jpg';
import proj6 from './Assets/Projects/proj6.jpg';

import ihtml from './Assets/Stack/HTML.jpg';
import icss from './Assets/Stack/CSS.jpg';
import ijs from './Assets/Stack/Javascript.svg'
import imongo from './Assets/Stack/MongoDB.svg'
import iexpress from './Assets/Stack/Express.jpg'
import ireact from './Assets/Stack/React.jpg'
import inode from './Assets/Stack/NodeJs.svg'
import igit from './Assets/Stack/Git.svg'
import igithub from './Assets/Stack/Github.jpg'
import ipostman from './Assets/Stack/Postman.svg'
import iredux from './Assets/Stack/Redux.svg'
import itailwind from './Assets/Stack/Tailwind.jpg'

export const allIcons = [ihtml,icss,ijs,ireact,iredux,itailwind,iexpress,imongo,inode,igit,igithub,ipostman];

const projData = [
    {
        "id":2,
        "projPath":proj2,
        "title": "Personal Portfolio",
        "icons":[ihtml,icss,ijs,ireact,igit,igithub],
        "description": 'The Website displays the projects that I have developed and the tech stack that I have used to build these projects',
        "github" : '#',
        "liveLink": '#'
    },

    {
        "id":3,
        "projPath":proj3,
        "title": "Health Check Slider",
        "icons":[ihtml,icss,ijs,ireact,igit,igithub,itailwind],
        "description": 'The Web App displays various health checks based on different filters and can randomly display info from any of the supported categories, on clicking "Surprise".',
        "github" : 'https://github.com/Saket0197/Health-Check-Slider',
        "liveLink": 'https://saket0197.github.io/Health-Check-Slider/'
    },

    {
        "id":4,
        "projPath":proj4,
        "title": "Dev Detective",
        "icons":[ihtml,icss,ijs,igit,igithub],
        "description": "The web app lets you search for any Developer's Github Profile by their username(s).It supports both light and dark mode as per your preference",
        "github" : 'https://github.com/Saket0197/Dev-Detective',
        "liveLink": 'https://saket0197.github.io/Dev-Detective/'
    },

    {
        "id":5,
        "projPath":proj5,
        "title": "Weather App",
        "icons":[ihtml,icss,ijs,igit,igithub],
        "description": 'Know Your Local Weather or Search Weather of any city across the Globe by its name. The Web App uses OpenWeather API for retrieving real time weather data.',
        "github" : 'https://github.com/Saket0197/WeatherApp',
        "liveLink": 'https://saket0197.github.io/WeatherApp/'
    },

    {
        "id":6,
        "projPath":proj6,
        "title": "Password Generator",
        "icons":[ihtml,icss,ijs,igit,igithub],
        "description": 'Generate Strong Passwords for any of your accounts or other applications using password generator',
        "github" : 'https://github.com/Saket0197/PasswordGenerator',
        "liveLink": 'https://saket0197.github.io/PasswordGenerator/'
    }
];

export default projData;