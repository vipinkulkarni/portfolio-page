export const personalInfo = {
  name: "Vipinkumar Kulkarni",
  title: "Software Engineer",
  tagline: "Software Engineer at Siemens",
  email: "vipinkulkarni16@gmail.com",
  phone: "+91 9381705527",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/vipinkumar-kulkarni",
  github: "https://github.com/vipinkulkarni",
  resumeUrl: "/Vipinkumar_Resume.pdf",
  roles: [
    "design full-stack solutions",
    "debug production systems",
    "explore machine learning",
  ],
  about: [
    "I'm a <strong>Full-Stack Developer</strong> with over 2.5 years of professional experience building enterprise software at <strong>Siemens</strong>. My journey started with curiosity-driven side projects and internships, and has grown into shipping production-grade features used across global teams.",
    "I focus on building reliable, performant applications across the entire stack — from designing data models to crafting responsive interfaces. I primarily work with <strong>C++</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.",
  ],
};

export interface Highlight {
  icon: string;
  title: string;
  text: string;
}

export const highlights: Highlight[] = [
  {
    icon: "zap",
    title: "Performance Focused",
    text: "Optimizing applications for speed, efficiency, and a seamless user experience.",
  },
  {
    icon: "layers",
    title: "Full-Stack Builder",
    text: "From data models and APIs to pixel-perfect UI — I own problems end to end.",
  },
  {
    icon: "check-circle",
    title: "Code Quality First",
    text: "Writing maintainable, scalable code that others can easily build on.",
  },
  {
    icon: "trending-up",
    title: "Quick Learner",
    text: "Pick up new tools, frameworks, and domains fast — and enjoy doing it.",
  },
];

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  techStack: string[];
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "Siemens Digital Industries Software",
    role: "Software Engineer",
    duration: "July 2023 - Present",
    location: "Pune, India",
    techStack: ["C++", "Java", "JavaScript", "React"],
    bullets: [
      "Working with Structure Applications team to solve real-time problems and resolve defects in existing functionalities under Teamcenter.",
      "Worked in both frontend and backend across areas like Compare, Duplicate, Weight and Balance, Cost and Rollup.",
      "Resolved 100+ defects and issues in existing functionality over 2.5 years, sharpening problem-solving skills.",
      "Mentored a junior developer on projects and documented best practices within the organization.",
    ],
  },
  {
    company: "Ford Motors Pvt. Ltd.",
    role: "Summer Intern",
    duration: "May 2022 - July 2022",
    location: "Remote",
    techStack: ["PowerShell Scripting", "AWS S3"],
    bullets: [
      "Worked with StaaS team to build codes for management of Object Storage S3.",
      "Developed PowerShell codes on S3 SDK clients to enable clients to maintain and manage S3 namespaces.",
      "Conducted a PoC of Serverless CLAMScan on S3 object scanning testing on client CDK construct.",
      "Explored benefits of Object Storage over File and Block Storage, and Python/Java SDK codes for managing Object Storage.",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveUrl?: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    name: "Developer Portfolio",
    description: "A modern, responsive portfolio website built to showcase my skills, experience, and projects.",
    tools: ["React", "TypeScript", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/vipinkulkarni/portfolio-page",
    "liveUrl": "https://portfolio-page-vipin-kulkarni.vercel.app/",
    bullets: [
      "Built a single-page portfolio with React, TypeScript, and Vite for fast development and optimized builds.",
      "Implemented smooth scroll navigation and animated section reveals using Framer Motion.",
      "Designed a fully responsive layout with a custom typewriter effect hook for the hero section.",
    ],
  },
  {
    name: "Warehouse Robot Simulator",
    description: "An autonomous mobile robot simulator with perception, localization, navigation, and mapping.",
    tools: ["C++", "Qt", "OpenGL"],
    githubUrl: "https://github.com/vipinkulkarni/warehouse-robot-simulator",
    bullets: [
      "Simulates Perception, Localization, Navigation, and Mapping concepts with a warehouse backdrop.",
      "Provision for both manual controls and automatic navigation with A* grid mapping.",
      "Collision recovery to detect collisions effectively and navigate around obstacles.",
    ],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { category: "Programming Languages", skills: ["Python", "C++", "JavaScript", "Java"] },
  { category: "Web Technologies", skills: ["React.js", "Node.js", "HTML", "CSS"] },
  { category: "Database Systems", skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "Data Science & ML", skills: ["NumPy", "Pandas", "Scikit-Learn"] },
];

export const education = {
  institution: "Visvesvaraya National Institute of Technology",
  degree: "B.Tech in Electronics and Communications Engineering",
  duration: "June 2019 - May 2023",
  location: "Nagpur, India",
  gpa: "8.42 / 10.00",
};

export interface Award {
  title: string;
  date: string;
  organization: string;
  description: string;
}

export const awards: Award[] = [
  {
    title: "BOM Excellence Award",
    date: "December 2024",
    organization: "Siemens Digital Industries Software",
    description: "Awarded for contribution to Teamcenter 2412 Release.",
  },
];
