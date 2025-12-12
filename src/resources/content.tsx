import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Marvin",
  lastName: "Escobar",
  name: `Marvin Escobar`,
  role: "Senior Developer & Project Leader",
  avatar: "/images/avatar.jpg",
  email: "escobarjose937@gmail.com",
  location: "America/El_Salvador", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Thorin217",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jose-escobar-837837266",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/marvin_higginss",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@marvin_higginss",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Senior Developer building scalable web & mobile products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    5+ years of experience delivering end-to-end solutions — from system design and APIs to frontend, mobile apps, and production deployments.
</>
  ),
};

const about: About = {
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
        Marvin is a San Salvador-based programmer with over 5 years of experience building code for companies 
        with transactional services. He creates systems with monolithic and microservice architecture, starting 
        from requirement gathering, database design, back-end and front-end development. Specialized in problem 
        solving, teamwork, and personnel management.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "KAZU Real Estate",
        timeframe: "October 2024 - Present (Part-time)",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed the official mobile application for KAZU Real Estate, focused on property management and visualization, 
            enhancing the experience for users and agents.
          </>,
          <>
            Implemented modern and responsive interfaces, ensuring high performance, usability, and visual consistency throughout the application.
          </>,
          <>
            Collaborated closely with product and backend teams to integrate APIs, authentication flows, and key business functionalities.
          </>,
          <>
            Actively participated in defining technical requirements, proposing frontend solutions aligned with startup objectives.
          </>,
          <>
            Optimized components and navigation flows to improve load times and stability on mobile devices.
          </>,
          <>
            Contributed to the technological growth of the startup from an early stage, supporting the construction and scalability of the digital product.
          </>,
        ],
        images: [],
      },
      {
        company: "Grupo Publimovil",
        timeframe: "2020 - Present",
        role: "Senior Developer & Project Leader",
        achievements: [
          <>
            Led a team of 4 developers and 1 designer, implementing agile methodologies and optimizing delivery times.
          </>,
          <>
            Developed a web application to create photographic reports and monitor advertising media in real-time, 
            reducing delivery time and contributing to decision-making for media maintenance management.
          </>,
          <>
            Built an internal personnel management application for the HR department, streamlining processes and improving efficiency.
          </>,
          <>
            Wrote code for internal use applications including check requests and correspondence tracking systems.
          </>,
        ],
        images: [],
      },
      {
        company: "PLAMMED",
        timeframe: "2017 - 2019",
        role: "Junior Developer",
        achievements: [
          <>
            Developed an application for medical appointment management system.
          </>,
          <>
            Responsible for training end users on medical systems.
          </>,
          <>
            Wrote code for C# desktop application for video recording in gastrointestinal endoscopies and creation of photographic reports.
          </>,
          <>
            Supervised technical teams responsible for computer maintenance.
          </>,
          <>
            Provided technical support to ensure smooth operations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universidad Tecnológica de El Salvador",
        description: <>Engineer's Degree in Systems and Computer Engineering (2021)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Full-Stack Development",
        description: (
          <>Proficient in PHP, JavaScript, Python, and modern frameworks like Vue.js, React, and Node.js for building scalable web applications.</>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Vue.js",
            icon: "vue",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Database & Backend",
        description: (
          <>Expert in MySQL database design and RESTful API development for robust backend systems.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>Experienced with Git version control, Docker containerization, and CSS frameworks for efficient development workflows.</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
