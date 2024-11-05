import js from "../../public/Tools/js-svgrepo-com.svg";
import mongodb from "../../public/Tools/mongodb-svgrepo-com.svg";
import express from "../../public/Tools/express-svgrepo-com.svg";
import git from "../../public/Tools/git-svgrepo-com.svg";
import github from "../../public/Tools/github-svgrepo-com.svg";
import html from "../../public/Tools/html-5-svgrepo-com.svg";
import java from "../../public/Tools/java-svgrepo-com.svg";
import mysql from "../../public/Tools/mysql-logo-svgrepo-com.svg";
import node from "../../public/Tools/node-svgrepo-com.svg";
import react from "../../public/Tools/react-svgrepo-com.svg";
import tailwind from "../../public/Tools/tailwind-svgrepo-com.svg";
import postman from "../../public/Tools/postman-icon-svgrepo-com.svg";
import next from "../../public/Tools/next.svg";
import cpp from "../../public/Tools/cpp.svg";
import leetcode from "../../public/Tools/leetcode.svg";
import linkedin from "../../public/Tools/linkedin.svg";
import gfg from "../../public/Tools/gfg.svg";
import solidity from "../../public/Tools/solidity.svg";
import android_studio from "../../public/Tools/android_studio.svg";
import redux_icon from "../../public/Tools/redux_icon.svg";
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "projects", label: "Projects" },
  { to: "tools-and-technologies", label: "Tools and Technologies" },
  { to: "about-me", label: "About Me" },
];

export const timelineEvents = [
  {
    date: "2023 - 2024",
    Title: "Technical Lead at GDSC MPSTME Shirpur",
    description:
      "In August 2023, I became the Technical Lead for our campus. I organized and managed the Code Kraken hackathon, facilitated Google Cloud workshops, and taught 9th-10th grade students about technology to inspire their interest. I also maintain the GDSC-MPSTME-SHIRPUR website.",
  },
  {
    date: "2022 - 2023",
    Title: "Subcore Member at GDSC MPSTME Shirpur",
    description:
      "In the 2022-23 session, I served as a subcore member, contributing to various projects and initiatives. This role helped me develop essential skills and gain valuable experience, setting the foundation for my current position as Technical Lead.",
  },
  {
    date: "2022 - Present",
    Title: "Student at MPSTME, Shirpur",
    description:
      "I am currently pursuing a Bachelor of Technology in Computer Engineering at MPSTME, Shirpur. I have a CGPA of 3.64 out of 4 and am actively involved in extracurricular activities such as Google Developer Student Clubs (GDSC).",
  },
  {
    date: "2021",
    Title: "Completed 12th std.",
    description:
      "Completed 12th std. from Saraswati Vidya Vihar Sr. Sec. School, with 95.20% score in the Science stream.",
  },
];

export const projects = [
  {
    title: "Jeevan Hospital",
    description:
      "Jeevan is a website (Online Hospital Management System), where we have two types of users: patients and doctors. Users can book appointments, patients can check lab results, and users can update their profiles. Additionally, the system supports creating, updating, getting, and deleting reviews, as well as real-time chat between patients and doctors.",
    githubLink: "https://github.com/chirag412vijayvergiya/Health",
    demoLink: "https://jeevan-frontend.vercel.app/",
    projectImage: "/Jeevan.png",
    skills: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "Passport.js",
      "Cloudinary",
      "Stripe",
      "websockets",
      "postman",
      "Mailtrap",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Crowd Coin",
    description:
      "Crowd Coin is a decentralized application (DApp) that enables users to create and participate in crowdfunding campaigns. Users can create campaigns, contribute to existing ones, and view the details of each campaign. The platform is built on the Ethereum blockchain, ensuring transparency and security for all transactions.",
    githubLink: "https://github.com/chirag412vijayvergiya/kickstart",
    demoLink: "https://crowdcoin-chirag.vercel.app/",
    projectImage: "/CrowdCoin.png",
    skills: [
      "React",
      "Solidity",
      "Next.js",
      "web3.js",
      "Metamask",
      "Infura",
      "Ethereum",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    title: "Sobus",
    description:
      "The Sobus platform streamlines task assignments and activity tracking for its entrepreneurial community. Admins can easily assign tasks, create new activities, and notify members in real time, while members can track and update tasks seamlessly. This user-friendly platform fosters collaboration, helping Sobus stay organized and productive.",
    githubLink: "https://github.com/chirag412vijayvergiya/sobus",
    demoLink: "https://sobus.vercel.app/",
    projectImage: "/sobus.png",
    skills: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "Passport.js",
      "Cloudinary",
      "postman",
      "Vercel",
      "Nodemailer",
    ],
  },
  {
    title: "Trip Note",
    description:
      "Trip Note is a web application that enables users to create location-based notes on a map, ideal for capturing travel memories and essential details. With intuitive map interactions, users can click on any spot to store notes, making it easy to revisit and relive their travel experiences. It's designed to enhance personal documentation and provide a seamless way to curate memorable journeys.",
    githubLink: "https://github.com/chirag412vijayvergiya/TRIPNOTE",
    projectImage: "/TripNote.png",
    skills: ["React", "Leaflet", "JSON file-storage"],
  },
  {
    title: "Portfolio",
    description:
      "This is my personal portfolio website, where I showcase my projects, skills, and experiences. It's designed to provide an overview of my work and help visitors learn more about me. The site is built using Next.js, Tailwind CSS, and deployed on Vercel.",
    githubLink: "https://github.com/chirag412vijayvergiya/Portfolio",
    projectImage: "/portfolio.png",
    skills: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Natours",
    description:
      "Natours is a fictional tour booking website that offers a variety of outdoor adventures. Users can explore different tours, view details, and book their preferred options. The site features a modern design with a focus on user experience, making it easy to navigate and discover exciting travel opportunities.",
    githubLink: "https://github.com/chirag412vijayvergiya/Natours",
    projectImage: "/Natours.png",
    skills: ["pug", "Node.js", "Express", "MongoDB", "Stripe", "Mailtrap"],
  },
];

export const tools = [
  {
    src: js,
    alt: "JavaScript",
  },
  {
    src: mongodb,
    alt: "MongoDB",
  },
  {
    src: express,
    alt: "Express",
  },
  {
    src: git,
    alt: "Git",
  },
  {
    src: github,
    alt: "GitHub",
  },
  {
    src: html,
    alt: "HTML",
  },
  {
    src: java,
    alt: "Java",
  },
  {
    src: mysql,
    alt: "MySQL",
  },
  {
    src: node,
    alt: "Node.js",
  },
  {
    src: react,
    alt: "React",
  },
  {
    src: tailwind,
    alt: "Tailwind CSS",
  },
  {
    src: postman,
    alt: "Postman",
  },
  {
    src: next,
    alt: "Next.js",
  },
  {
    src: cpp,
    alt: "C++",
  },
  {
    src: solidity,
    alt: "Solidity",
  },
  {
    src: android_studio,
    alt: "Android Studio",
  },
  {
    src: redux_icon,
    alt: "Redux",
  },
];

export const socialLinks = [
  {
    icon: github,
    link: "https://github.com/chirag412vijayvergiya/",
    alt: "GitHub",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/chirag-vijayvergiya-548635245/",
    alt: "LinkedIn",
  },
  {
    icon: leetcode,
    link: "https://leetcode.com/u/chiragvijayvergiya/",
    alt: "Leetcode",
  },
  {
    icon: gfg,
    link: "https://www.geeksforgeeks.org/user/chiragvijayivnt/",
    alt: "GeeksforGeeks",
  },
];
