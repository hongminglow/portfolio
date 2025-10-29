import {
  astro,
  contact,
  cocos,
  docker,
  expo,
  gitlab,
  godot,
  golang,
  kotlin,
  nestjs,
  nuxt,
  reactnative,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
  vue,
  companySmall,
  companyMedium,
  tradeforyou,
  foodmonkey,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: gitlab,
    name: "GitLab",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Nodejs",
    type: "Backend",
  },
  {
    imageUrl: nestjs,
    name: "Nestjs",
    type: "Backend",
  },
  {
    imageUrl: golang,
    name: "Golang",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Nextjs",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt",
    type: "Frontend",
  },
  {
    imageUrl: astro,
    name: "Astro",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Devops",
  },
  {
    imageUrl: reactnative,
    name: "React Native",
    type: "Mobile Development",
  },
  {
    imageUrl: expo,
    name: "Expo",
    type: "Mobile Development",
  },
  {
    imageUrl: kotlin,
    name: "Kotlin",
    type: "Mobile Development",
  },
  {
    imageUrl: cocos,
    name: "Cocos",
    type: "Game Development",
  },
  {
    imageUrl: godot,
    name: "Godot",
    type: "Game Development",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Ardent Asia Pacific Sdn Bhd",
    icon: companySmall,
    iconBg: "#b7e4c7",
    date: "Jan 2021 - June 2021",
    points: [
      "Focused on front-end development using React, ensuring the smooth functioning and visual appeal of web applications",
      "Collaborated with team members, adhered to project timelines, and participated in bug fixing activities when required",
    ],
  },
  {
    title: "System Engineer",
    company_name: "Ardent Asia Pacific Sdn Bhd",
    icon: companySmall,
    iconBg: "#fbc3bc",
    date: "July 2021 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Atoz Software Sdn Bhd",
    icon: companyMedium,
    iconBg: "#6996b2",
    date: "April 2024 - Present",
    points: [
      "Delivered frontend features and web applications using React and modern tooling, often within tight timelines.",
      "Maintained clear, proactive communication with designers and business analysts to align on requirements and UX expectations.",
      "Implemented responsive, accessible, and cross-browser compatible user interfaces for desktop and mobile.",
      "Collaborated and perform discussion with peers to maintain high code quality.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/hongminglow",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/low-hong-ming-476353210",
  },
];

export const projects = [
  {
    iconUrl: tradeforyou,
    theme: "btn-back-blue",
    name: "Trade For You",
    description:
      "A cutting-edge real-time stock tracking platform that empowers investors with live market data, personalized watchlists, and the latest news for each stock",
    link: "https://stock-trading-ft0l4xbr3-low-hong-mings-projects.vercel.app/",
  },
  {
    iconUrl: foodmonkey,
    theme: "btn-back-black",
    name: "Food Monkey",
    description:
      "A modern and simple food ordering app built with Expo and React Native",
    link: "https://github.com/hongminglow/food-monkey",
  },
];
