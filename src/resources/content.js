import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nayyar",
  lastName: "Abbas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer & Devops Engineer",
  avatar: "/images/avatar.jpg",
  email: "22nayyarabbas@gmail.com",
  location: "Islamabad/Pakistan", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I'm a MERN Stack Developer and DevOps Engineer who enjoys building full-stack web applications and crafting efficient development pipelines.
       I often share insights on scalable architecture, modern tooling, and the intersection of code, infrastructure, and creativity.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Nayyar22Abbas",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nayyar-abbas-332216329/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Shaping digital products from concept to deployment.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">DocXtract</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      <p style={{ fontSize: '0.9rem' }}>
    I'm a MERN Stack Developer and DevOps Engineer who enjoys building full-stack web applications and crafting efficient development pipelines.
    I often share insights on scalable architecture, modern tooling, and the intersection of code, infrastructure, and creativity.
  </p>
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nayyar is a full-stack developer and DevOps engineer passionate about crafting performant web 
        applications and building resilient development pipelines. With a strong foundation in both
         software engineering and infrastructure automation, he thrives at the intersection of code, 
         systems, and collaboration. His work spans responsive UIs, backend APIs, CI/CD tooling, 
         and the integration of development and operations into unified, scalable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Free Lancing",
        timeframe: "2022 - Present",
        role: "Web Developer & Devops Engineer",
        achievements: [
          <>
            Built a real-time code visualization tool that supports multiple programming languages, 
            enhancing students' understanding of code execution flow and debugging patterns.
          </>,
          <>
            Developed an AI-powered document analysis tool to extract 
            insights, summaries, and predictive insights from structured academic and technical documents.
          </>,
          <>
            Designed and developed a full-featured e-commerce web app with user authentication, 
            product listing, cart management, and admin dashboard using the MERN stack.
          </>,
          <>
            Developed a POS system with inventory management, customer tracking, and real-time sales reports. Built
             with .NET and integrated with a local database for small businesses.
          </>,
          <>
            Created a university portal enabling student registration, attendance tracking, and assignment submissions. 
            Included admin roles, student dashboards, and automated email notifications.
          </>,
          <>
            Implemented a CI/CD pipeline using GitHub Actions, 
            Docker, and Jenkins for a sample microservice app, automating build, test, and deployment stages.
          </>
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Air University Islamabad",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
  title: "Next.js",
  description: (
    <>
      <ul>
        <li>Building server-side rendered and statically generated applications</li>
        <li>Experienced with both App Router and Pages Router</li>
        <li>SEO optimization using metadata and dynamic routing</li>
        <li>Deployed apps using Vercel, Netlify, and custom domains</li>
      </ul>
    </>
  ),
},
{
  title: "Web Development (MERN Stack)",
  description: (
    <>
      <ul>
        <li>Building full-stack apps using MongoDB, Express, React, and Node.js</li>
        <li>Reusable component-based UI development</li>
        <li>REST API design and integration</li>
        <li>State management using Context API and hooks</li>
      </ul>
    </>
  ),
},
{
  title: "DevOps (Beginner Level)",
  description: (
    <>
      <ul>
        <li>CI/CD with GitHub Actions and Jenkins</li>
        <li>Basic Docker usage for containerization</li>
        <li>Shell scripting for automation (Bash)</li>
        <li>Working knowledge of deployment pipelines</li>
      </ul>
    </>
  ),
},
{
  title: "Version Control & Collaboration",
  description: (
    <>
      <ul>
        <li>Proficient with Git and GitHub workflow</li>
        <li>Collaborating using team tools like Trello, Slack</li>
        <li>Managing feature branches and pull requests</li>
      </ul>
    </>
  ),
},
{
  title: "Programming Languages",
  description: (
    <>
      <ul>
        <li>JavaScript (Advanced)</li>
        <li>TypeScript (Intermediate)</li>
        <li>C / C++ (Intermediate)</li>
        <li>C# (Intermediate)</li>
        <li>Python (Basic)</li>
      </ul>
    </>
  ),
},
{
  title: "Technical Writing & Research",
  description: (
    <>
      <ul>
        <li>Writing clear technical documentation</li>
        <li>Creating structured project reports and summaries</li>
        <li>Fast learning and experimentation with emerging tech</li>
      </ul>
    </>
  ),
},
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Exploring DevOps, full-stack development & design systems",
  description: `Insights and updates from ${person.name} on scalable architecture, web engineering, and developer workflows.`,
  // Posts listed from app/blog/posts
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack development, DevOps solutions, and design engineering projects by ${person.name}`,
  // Add .mdx project files to app/work
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Snapshots of code, creativity, and community – curated by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "DevOps pipeline visualization",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Campus Portal UI Screenshot",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "POS System Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Figma UI Designs",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Terminal view of CI/CD scripts",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "MERN Stack Authentication Module",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Node.js API integration logs",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Cloud deployment interface",
      orientation: "vertical",
    },
  ],
};


export { person, social, newsletter, home, about, blog, work, gallery };
