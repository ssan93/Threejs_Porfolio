import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sevenweb,
  sfeir,
  selligent,
  nextjs,
  mui,
  postgresql,
  wedlive,
  bizkiz,
  lv,
  wedlivefront,
  luxolis,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
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
    title: "Frontend",
    icon: web,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Devops",
    icon: mobile,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "Next JS",
    icon: nextjs,
    link: "https://nextjs.org/",
  },
  {
    name: "React JS",
    icon: reactjs,
    link: "https://react.dev/",
  },
  {
    name: "TypeScript",
    icon: typescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    link: "https://tailwindcss.com/",
  },
  // {
  //   name: "Material UI",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
    link: "https://nodejs.org/",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    link: "https://www.postgresql.org/",
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];
const technologiesMobile = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Material UI",
    icon: mui,
  },
];
const experiences = [
  {
    title: "Freelance Software Engineer",
    company_name: "7web Consulting",
    company_website: "https://www.7webconsulting.com",
    icon: sevenweb,
    iconBg: "#000000",
    date: "July 2023 - Present",
    points: [
      "Building and maintaining websites for small businesses and startups",
      "Optimizing websites for speed and search engine optimization",
      "Commercialization of a web application for live usage in weddings",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Luxolis",
    icon: luxolis,
    company_website: "https://luxolis.ai/",
    iconBg: "#000000",
    date: "April 2024 - May 2024",
    points: [
      "Integrated video capture and scene scan functionalities into the 3D Scan App",
      "Optimized web and mobile apps, improving scan quality by 25%",
      "Managed AWS infrastructure, adding roles to improve security and stability",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sfeir",
    icon: sfeir,
    company_website: "https://www.sfeir.com",
    iconBg: "#000000",
    date: "September 2020 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Project Manager",
    company_name: "Selligent",
    company_website: "https://www.selligent.com",
    icon: selligent,
    iconBg: "#000000",
    date: "September 2019 - August 2020",
    points: [
      "Conception and optimization of databases for clients",
      "Technical realization of automated marketing campaign scenarios",
      "Developed a campaign monitoring system to track the performance of marketing campaigns",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "WedLive",
    description:
      "Web application to provide images for a live slideshow during weddings and other events",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: wedlivefront,
    project_link: "https://wedlive.steven-san.com",
  },
  {
    name: "Business Cases",
    description:
      "Tool to centralize business cases and be able to share them easily with clients",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: bizkiz,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Tambour Horizon Light Up",
    description: "Developed Backend services for the LV Smartwatch",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "googlecloud",
        color: "pink-text-gradient",
      },
    ],
    image: lv,
    project_link:
      "https://eu.louisvuitton.com/eng-e1/products/tambour-horizon-light-up-connected-watch-nvprod3420006v/QBB187",
    // source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  technologiesMobile,
  experiences,
  testimonials,
  projects,
};
