/**
 * portfolioData.ts
 * ---------------------------------------------------------------
 * CENTRAL CONTENT FILE — COMP229 Assignment 1 (React Portfolio)
 * Owner: Nihad Idelah
 *
 * Every piece of personal content shown on the site lives here.
 * To update the portfolio, edit ONLY this file — the pages read
 * all of their text, images, and links from these constants.
 * ---------------------------------------------------------------
 */

// ---------- Personal identity (About page + logo + footer) ----------
export const personalInfo = {
  fullName: "Nihad Idelah",           // legal name shown on the About page
  initials: "NI",                     // shown inside the custom hexagon logo
  tagline: "Software Engineering Technology Student — AI Specialization",
  missionStatement:
    "My mission is to combine years of professional experience in corporate " +
    "performance management with modern software engineering and AI, building " +
    "reliable, data-driven applications that help people and organizations " +
    "make better decisions.",
  shortBio:
    "I am a Software Engineering Technology student at Centennial College, " +
    "specializing in Artificial Intelligence. Before returning to school, I " +
    "spent over a decade at Dubai Customs in corporate performance — analyzing " +
    "data, coordinating strategy, and managing dozens of projects at once. " +
    "Today I apply that same analytical, detail-oriented approach to software: " +
    "designing databases, modeling system requirements, and building responsive " +
    "web interfaces with HTML, CSS, JavaScript, and React.",
  headshotImage: "assets/headshot.png", // head-and-shoulders photo (rubric item 4)
  resumePdf: "assets/resume.pdf",       // PDF resume link (rubric item 5)
};

// ---------- Projects page (at least 3 projects, rubric item 6) ----------
export interface Project {
  title: string;        // project name shown on the card
  image: string;        // path to the project image
  role: string;         // your role in the project
  description: string;  // short description of the outcome
  technologies: string[]; // tech stack badges
}

export const projectList: Project[] = [
  {
    title: "MemoryKeeper App — System Requirements & Modeling",
    image: "assets/project-memorykeeper.svg",
    role: "UI/UX Design, System Requirements & Modeling (team project)",
    description:
      "Collaborated to design a comprehensive Software Requirements " +
      "Specification (SRS) for a senior-care application, managing 17 " +
      "requirements and 13 detailed use cases. Created UML models including a " +
      "domain class diagram, state machines for escalation timers, and a Party " +
      "Analysis Pattern for flexible user roles — with PIPEDA & PHIPA " +
      "compliance and role-based access control built into the design.",
    technologies: ["UML", "SRS", "Requirements Analysis", "UI/UX"],
  },
  {
    title: "Enterprise Database System",
    image: "assets/project-enterprise-db.svg",
    role: "Database Designer & SQL Developer",
    description:
      "Applied entity-relationship modelling and normalization to design a " +
      "comprehensive enterprise schema. Built complex SQL queries with " +
      "constraint designs for data retrieval, and produced technical cheat " +
      "sheets used in project demonstrations.",
    technologies: ["SQL", "ER Modelling", "Normalization", "Schema Design"],
  },
  {
    title: "Skill Swap Web Application",
    image: "assets/project-skillswap.svg",
    role: "Front-End Developer (Agile/Scrum team)",
    description:
      "Designed and developed a responsive, user-friendly front end for an " +
      "educational skill-sharing platform using HTML5, modern CSS3, and " +
      "JavaScript. Implemented interactive UI components, mobile-responsive " +
      "layout grids, and dynamic form validation while managing the workflow " +
      "through Agile sprint backlogs and GitHub version control.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Agile/Scrum", "GitHub"],
  },
];

// ---------- Education page (rubric item 7) ----------
export interface EducationEntry {
  institution: string;   // school / organization name
  credential: string;    // degree or diploma obtained
  startYear: string;     // start date
  endYear: string;       // end date (or "Present")
  details: string;       // short note about the program
}

export const educationHistory: EducationEntry[] = [
  {
    institution: "Centennial College, Toronto, ON",
    credential: "Software Engineering Technology — Artificial Intelligence Specialization",
    startYear: "Jan. 2026",
    endYear: "Present",
    details:
      "Relevant courses: Web Application Development, Web Interface Design, " +
      "Programming (Python, Java, C), Database Concepts (SQL), Linux/Unix OS, " +
      "and Software Requirements Engineering.",
  },
  {
    institution: "University of Poona, Pune, India",
    credential: "Bachelor of Commerce, Business Administration",
    startYear: "",
    endYear: "April 1994",
    details:
      "Undergraduate degree providing the business foundation for a later " +
      "career in corporate performance management and strategic planning.",
  },
  {
    institution: "Professional Certifications & Training",
    credential: "Certifications & Additional Training",
    startYear: "",
    endYear: "",
    details:
      "Kaplan-Norton Balanced Scorecard Certification Boot Camp (Palladium); " +
      "Project Management Professional (PMP) Preparation Course (Site Power); " +
      "Internal Assessor for Government Excellence (Dubai Government Excellence Program).",
  },
];

// ---------- Services page (rubric item 8) ----------
export interface ServiceOffering {
  title: string;       // service name
  icon: string;        // key mapped to an icon in Services.tsx
  description: string; // what the service includes
}

export const serviceOfferings: ServiceOffering[] = [
  {
    title: "Web Development",
    icon: "globe",
    description:
      "Responsive, accessible websites and single-page applications built " +
      "with HTML5, CSS3, JavaScript, and React.",
  },
  {
    title: "General Programming",
    icon: "code",
    description:
      "Clean, well-documented code in Python, Java, C, PHP, and JavaScript — " +
      "from algorithms to course-scale applications.",
  },
  {
    title: "Database Design & SQL",
    icon: "database",
    description:
      "Relational schema design, ER modelling, normalization, and complex " +
      "SQL query development with strong data integrity.",
  },
  {
    title: "Requirements Analysis & UML",
    icon: "clipboard",
    description:
      "Software Requirements Specifications (SRS), use cases, UML domain " +
      "models, and state machines that keep projects on solid ground.",
  },
  {
    title: "Data Analysis & Reporting",
    icon: "chart",
    description:
      "Management reports, statistical summaries, KPI tracking, and clear " +
      "presentations built from complex data sources.",
  },
  {
    title: "Project Coordination",
    icon: "kanban",
    description:
      "Agile/Scrum workflows, sprint backlogs, and version control with " +
      "Git/GitHub to keep team projects moving on deadline.",
  },
];

// ---------- Contact page (rubric item 9) ----------
export const contactDetails = {
  email: "idelah.nihad@gmail.com",
  phone: "437-774-1970",
  location: "Mississauga, Ontario, Canada",
  availability: "Open to junior developer, data, and software engineering opportunities",
};
