import img from "../img/kababa.jpg";
import img2 from "../img/porfoliov2.jpg";
import img3 from "../img/luxury.jpg";
import DisneyPlus from "../img/DisneyPlus.png";
import resort from "../img/resort.jpg";
import Valentinos from "../img/Valentinos.jpg";
import equitorials from "../img/equitorials.jpg";
import leadnow from "../img/leadnow.jpg";
import tabaka from "../img/tabaka-hosp.jpg";
import naiparq from "../img/NaiParq.png";
import pms from "../img/projects/pms.png";
import qbv from "../img/projects/qbv.png";
import peapay from "../img/projects/peapay.png";
import borana from "../img/projects/borana.png";
import sanaa from "../img/projects/sanaa.png";

export const header = {
  titleOne: "Hi, my name is",
  titleTwo: "Brian Maurice Oluoch.",
  titleThree: "I build things for the web.",
  infOne: "I'm a developer based in Nairobi, Kenya specialized in",
  infTwo: "building (and occasionally designing) exceptional, high-quality",
  infThree: "websites and their backends.",
  btn: "Get In Touch",
};

export const skillsOne = [
  "JavaScript (ES6+)",
  "Angular 10",
  "HTML & (S)CSS",
  "Mongo DB",
];

export const skillsTwo = ["Next JS", "React JS", "React Native", "Node JS"];

export const previousJobs = [
  {
    title: "8teq",
    jobPosition: "Associate Software Engineer",
    location: "Nairobi, KE",
    startDate: "Nov 2021",
    endDate: "Current",
    responsibilities: [
      "Responsible for the layout design, create responsive webpage and implement dynamic features by\n" +
        "Bootstrap and Tailwind CSS.",
      "Marketing and guiding clients on how to use the website and mobile app.",
      "Made substantial changes to the architecture to improve performance of the Application.",
    ],
  },
  {
    title: "Apple",
    jobPosition: "Intern Frontend Developer",
    location: "Remote, KE",
    startDate: "Jan 2021",
    endDate: "Sept 2021",
    responsibilities: [
      "Responsible for system analysis, design, coding, testing, debugging and documentation.",
      "Analyzed business requirement to translate functional requirement into technical requirements\n" +
        "using MVC.  ",
      "Modified JavaScript to read client-side activities (events) and data and event validations.",
      "Modified SQL procedures and triggers to obtain optimized output.",
    ],
  },
  {
    title: "Upwork Freelance",
    jobPosition: "Software Developer",
    location: "Remote, KE",
    startDate: "May 2020",
    endDate: "Dec 2020",
    responsibilities: [
      "User JIRA for bug tracking, GIT as a version tool and Jenkins for continuous integration of builds.",
      "Managed and closed incident and task tickets in Service Now and provided weekly report.",
      "Implemented HTTP request using RxJS Observable library to handle multiple values over time.",
      "Enhanced application performance by Angular 8 Component based development in view of future\n" +
        "Angular framework transitions.",
    ],
  },
  {
    title: "Mobi Tech",
    jobPosition: "Full Stack Developer(Volunteer)",
    location: "Nairobi, KE",
    startDate: "Feb 2019",
    endDate: "Dec 2019",
    responsibilities: [
      "Responsible for designing the backend models, creating the views and creating the APIs to be\n" +
        "consumed in the frontend, using the MVC architecture.",
      "Worked on development and releases of the production under Agile/Scrum Cycles.",
      "Developed CSS styles to maintain the uniformity of all the screens throughout the design and\n" +
        "development of the web pages from mock-ups",
      "Responsible for ensuring the pattern consistency across all pages.",
    ],
  },
];

const data = [
  {
    id: 62,
    date: "2021-11-03",
    title: "sanaa",
    category: "Frontend",
    tools: "Next JS, NextAuth, Material UI, API's, TailwindCSS",
    github: "",
    link: "https://www.sanaa.ke",
    image: sanaa,
    desc: `
            qbVentures is a tech firm that strives to help African entrepreneurs achieve product-market fit and set them on a path to success in their venture-building journey. 
            qbVentures expertise ranges from conceptualizing a product to launching and scaling it into a wildly successful company`,
    special: true,
  },
  {
    id: 62,
    date: "2021-11-03",
    title: "qbVentures",
    category: "Frontend",
    tools: "Angular, SCSS, API's, TailwindCSS",
    github: "",
    link: "https://www.qbventures.africa/",
    image: qbv,
    desc: `
            qbVentures is a tech firm that strives to help African entrepreneurs achieve product-market fit and set them on a path to success in their venture-building journey. 
            qbVentures expertise ranges from conceptualizing a product to launching and scaling it into a wildly successful company`,
    special: true,
  },
  {
    id: 62,
    date: "2022-11-25",
    title: "Naiparq Parking Management System",
    category: "Frontend",
    tools: "Angular, SCSS, API's, TailwindCSS, NGRX",
    github: "",
    link: "https://pms.naiparq.co.ke/",
    image: pms,
    desc: `NPMS is a management system for parking owners to manage and track down revenues from their parking spaces.`,
    special: true,
  },
  {
    id: 62,
    date: "2021-11-03",
    title: "Borana",
    category: "Frontend",
    tools: "Angular, SCSS, API's, TailwindCSS, NGRX",
    github: "",
    link: "https://ebookings.vercel.app/",
    image: borana,
    desc: `
        Borana website helps both local and international tourist to book rooms and activities in advance before moving to the hotel.
        `,
    special: true,
  },
  {
    id: 61,
    date: "2021-11-03",
    title: "Peapay",
    category: "Frontend",
    tools: "Angular, SCSS, API's, TailwindCSS, NGRX",
    github: "",
    link: "https://peapay.africa/#/",
    image: peapay,
    desc: `Businesses of all sizes – from start-ups to large enterprises – use Peapay to collect and make payments anywhere in Africa and across the globe.`,
    special: true,
  },
  {
    id: 60,
    date: "2021-11-03",
    title: "NaiParq",
    category: "Frontend",
    tools: "Angular, SCSS, API's, Docker",
    github: "",
    link: "https://naiparq.co.ke/",
    image: naiparq,
    desc: `
      NaiParq is an app meant to help motorist within Nairobi to easily spot partking spaces.`,
    special: true,
  },
  {
    id: 59,
    date: "2021-06-25",
    title: "Tabaka Mission Hospital",
    category: "Frontend",
    tools: "Angular, CSS",
    github: "",
    link: "https://tabaka-hos.vercel.app/home",
    image: tabaka,
    desc: `
      TMH is a client project built with Angular framework.`,
    special: true,
  },
  {
    id: 58,
    date: "2021-06-14",
    title: "Leadnow",
    category: "Fullstack",
    tools: "Bootstrap, CSS, PHP",
    github: "",
    link: "http://leadnow.so/",
    image: leadnow,
    desc: `
      Leadnow is a women group in Somalia. This is their main website which is built with Code Igniter and bootstrap.`,
    special: false,
  },
  {
    id: 57,
    date: "2021-06-05",
    title: "Equitorials",
    category: "Fullstack",
    tools: "Bootstrap, CSS, PHP",
    github: "",
    link: "https://equitortrails.co.ke/",
    image: equitorials,
    desc: `
      This is a client project with the UI complete, currently working am working on the backend with Code Igniter.`,
    special: false,
  },
  {
    id: 56,
    date: "2021-05-28",
    title: "Disney+",
    category: "UX/UI Design",
    tools: "React js, Redux, Firebase",
    github: "https://github.com/blvck-code/Disney",
    link: "https://disney-f9ad8.web.app/",
    image: DisneyPlus,
    desc: `
      Clone to Disney+ UI which is built with React js and Styled Components, and Google Auth from Firebase.`,
    special: true,
  },
  {
    id: 55,
    date: "2021-05-27",
    title: "Valentinos Village Bistro",
    category: "Fullstack",
    tools: "PHP, JavaScript, Bootstrap",
    github: "",
    link: "https://www.valentinosvillagebistro.co.ke/",
    image: Valentinos,
    desc: `
      Valentinos Villa Bistro is a hotel project located in Machakos. This project is built with Code Igniter.`,
    special: false,
  },
  {
    id: 54,
    date: "2021-05-01",
    title: "Resort Beach",
    category: "UX/UI Design",
    tools: "React Js, Context API",
    github: "https://github.com/blvck-code/resort-beach",
    link: "https://oluoch-resort-beach.netlify.app/",
    image: resort,
    desc: `
      Resort beach is a hotel website that enables one to filter rooms with desired room conitions and price.`,
    special: true,
  },
  {
    id: 53,
    date: "2020-04-19",
    title: "Luxury Silk Backend APIs",
    category: "Backend",
    tools: "Django, Django RestFramework",
    github: "https://github.com/blvck-code/luxury-silk",
    link: "http://oluoch.pythonanywhere.com/",
    image: img3,
    desc: "This is backend APIs to upcoming Luxury Silk Ecommerce that is still under development. THIS PROJECT'S FRONTEND IS STILL UNDER DEVELOPMENT WITH REACT JS TECHNOLOGY.",
    special: false,
  },
  {
    id: 52,
    date: "2020-12-31",
    title: "Kababa Resort",
    category: "Frontend",
    tools: "React Js, Redux, CSS",
    github: "https://github.com/blvck-code/kababa",
    link: "https://kababa.netlify.app/",
    image: img,
    desc: "Kababa Resort is a hotel within my hometown(Siaya), I decided to support the community with my skills. THIS PROJECT IS STILL UNDER DEVELOPMENT.",
    special: true,
  },
  {
    id: 53,
    date: "2021-01-05",
    title: "Porfolio V2",
    category: "Frontend",
    tools: "React Js, Redux, CSS",
    github: "",
    link: "http://oluochbrian.netlify.app/",
    image: img2,
    desc: "THIS PROJECT IS STILL UNDER DEVELOPMENT.",
    special: false,
  },
  {
    id: 51,
    date: "2020-11-03",
    title: "Loruki | Cloud Hosting Website",
    category: "Frontend",
    tools: "HTML, CSS",
    github: "https://github.com/blvck-code/loruki-website",
    link: "https://oluoch-loruki.netlify.app/",
    image: "",
    desc: "Loruki Cloud Hosting Website is a clone of Heroku UI with a different name and Interface.",
    special: false,
  },
  {
    id: 49,
    date: "2020-10-24",
    title: "Applicious",
    category: "Frontend",
    tools: "HTML, SCSS",
    github: "https://github.com/blvck-code/responsive-site",
    link: "https://oluoch-applicious.netlify.app",
    image: "",
    desc: "Applicious is a responsive website i was trying to come up with to help me advance my skills in CSS and responsive.",
    special: false,
  },
  {
    id: 14,
    date: "2020-10-06",
    title: "Contacts API Fullstack",
    category: "Fullstack",
    tools: "React Hook, Redux, SCSS, Redux, API",
    github: "https://github.com/blvck-code/Contacts-API-frontend",
    link: "https://thecontacts.netlify.app/",
    image:
      "data:image/png;base64,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AACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKCSsAgAAAAAUElYBAAAAAAoJqwAAAAAAhYRVAAAAAIBCwioAAAAAQCFhFQAAAACgkLAKAAAAAFBIWAUAAAAAKPT/i62Tsc54X8wAAAAASUVORK5CYII=",
    desc: "This is contact book project where users can add contacts, delete & update.",
    special: false,
  },
  {
    id: 6,
    date: "2020-10-04",
    title: "Contacts API Backend",
    category: "Backend",
    tools: "Django,  API, Django RestFramework",
    github: "https://github.com/blvck-code/Contacts-API-backend",
    link: "https://contacts-api-backend.herokuapp.com/",
    image: "",
    desc: "This is the backend APIs to my ongoing project. The backend holds the APIs that the frontend will fetch data from. This project is hosted on heroku.",
    special: false,
  },
  {
    id: 11,
    date: "2020-10-01",
    title: "Coffee Junkie",
    category: "UX/UI Design",
    tools: "HTML, SCSS, Bootstrap",
    github: "https://github.com/blvck-code/Coffee-Junkie",
    link: "https://coffee-junkiee.netlify.app/",
    image: "",
    desc: "This is a design to a coffee shop website. The project is built with bootstrap and the design is great.",
    special: false,
  },
  {
    id: 4,
    date: "2020-10-01",
    title: "Linked In Clone Backend",
    category: "Backend",
    tools: "Django,  API, Django RestFramework",
    github: "https://github.com/blvck-code/linked-in-backend",
    link: "https://oluoch-linkedin.herokuapp.com/",
    image: "",
    desc: "Backend APIs to linked in clone. This backend project is hosted on heroku platform.",
    special: false,
  },
  {
    id: 8,
    date: "2020-09-15",
    title: "Leads Manager Frontend",
    category: "Frontend",
    tools: "React Hook, Bootstrap, Redux",
    github: "https://github.com/blvck-code/leads-manager-UI",
    link: "https://leads-manager.netlify.app",
    image: "",
    desc: "Leads manager allows users to create account, create and delete leads, and every user can only see their leads.",
    special: false,
  },
  {
    id: 7,
    date: "2020-09-08",
    title: "Leads Manager Backend",
    category: "Backend",
    tools: "Django,  API, Django RestFramework",
    github: null,
    link: "https://leads-manager-backend.herokuapp.com/",
    image: "",
    desc: "Backend APIS to Leads Manager. This backend is hosted on heroku where the frontend will be fetching API requests from.",
    special: false,
  },
  {
    id: 10,
    date: "2020-08-25",
    title: "Netflix Clone",
    category: "UX/UI Design",
    tools: "HTML, SCSS, JavaScript",
    github: "https://github.com/blvck-code/Netflix-Clone",
    link: "https://netflix-clonee.netlify.app/",
    image: "",
    desc: "This is a clone to Netflix homepage. I also love their simple designs and always want to try clone it.",
    special: false,
  },
  {
    id: 13,
    date: "2020-08-04",
    title: "Acme Web Design",
    category: "Frontend",
    tools: "HTML, SCSS, Bootstrap",
    github: "https://github.com/blvck-code/Acme-Web-Design",
    link: "https://acmee.netlify.app/",
    image: "",
    desc: "This is a website built during course study with Traversy Media. This site helped to equip me with botstrap skills.",
    special: false,
  },
  {
    id: 3,
    date: "2020-07-22",
    title: "Developer Connector",
    category: "Frontend",
    tools: "HTML, SCSS",
    github: "https://github.com/blvck-code/devsconnector",
    link: "https://devsconnector.netlify.app/",
    image: "",
    desc: "This is an overview to Linked In Clone with no backend. The idea is to come up with a fullstack of this demo.",
    special: false,
  },
];

export default data;
