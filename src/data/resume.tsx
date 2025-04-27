import { Icons } from "@/components/icons";

export const DATA = {
  name: "Michael Torres",
  initials: "MT",
  url: "https://michaelt.engineer",
  location: "Colombia",
  locationLink: "https://www.google.com/maps/place/colombia",
  description:
    "Systems Engineer specialized in full-stack development with expertise in React, Next.js, and Node.js. Proficient in designing and implementing responsive web applications and RESTful APIs. Committed to delivering high-quality solutions through clean code and modern development practices.",
  summary:
    "My journey in software development began at Universidad Popular del Cesar, where I earned my Systems Engineering degree while simultaneously serving as a Systems Monitor. This dual role allowed me to apply theoretical knowledge in practical settings, managing IT infrastructure and developing internal applications. Throughout my career, I've cultivated expertise in front-end technologies like React and Next.js, while also maintaining proficiency in back-end development with Node.js and database management systems. I thrive in collaborative environments and am particularly passionate about creating elegant solutions to complex technical challenges.",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "Postgres",
    "MySQL",
    "MongoDB",
    "TailwindCSS",
    "Docker",
    "Git",
  ],
  navbar: [
    { href: "#hero", icon: Icons.home },
    { href: "#about", icon: Icons.user },
    { href: "#work", icon: Icons.work },
    { href: "#education", icon: Icons.education },
    { href: "#skills", icon: Icons.shield },
    { href: "#projects", icon: Icons.folder },
    { href: "#certifications", icon: Icons.certifications },
    { href: "#contact", icon: Icons.contact },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mtorresweb",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaeltrs",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Michael_Tors?t=VX1ZY_nmI0uJu4GExnyoIg&s=08",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:me@michaelt.engineer",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Universidad Popular del Cesar",
      href: "https://aguachica.unicesar.edu.co/",
      badges: [],
      location: "On-site",
      title: "Systems Monitor",
      logoUrl: "/icons/upc-logo.png",
      start: "09/2024",
      end: "12/2024",
      description:
        "As a Systems Monitor, I provided technical support to students and faculty, assisting with system management and troubleshooting. I also contributed to the development of internal applications, enhancing the university's digital infrastructure.",
    },
  ],
  education: [
    {
      school: "Universidad Popular del Cesar",
      href: "https://aguachica.unicesar.edu.co/",
      degree: "Systems Engineering",
      logoUrl: "/icons/upc-logo.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Cambridge",
      href: "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/",
      degree: "Linguaskill English Test (CEFR) - B1",
      logoUrl: "/icons/cambridge.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Open English",
      href: "https://www.openenglish.com/",
      degree: "English B2",
      logoUrl: "/icons/open-english.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "SENA",
      href: "https://ibo.org",
      degree: "Technical Degree in Administrative Assistance",
      logoUrl: "/icons/sena.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Launched a SaaS platform enabling users to collect email addresses from GPT users, facilitating audience building and monetization of GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed, and marketed animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Created an open-source logging and analytics platform for OpenAI, enabling users to log ChatGPT API requests, analyze costs, and optimize prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI-powered customer support chatbot that automatically responds to support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  certifications: [
    {
      title: "Switching, Routing and Wireless Essentials",
      dates: "Nov 27, 2023",
      location: "Remote",
      description:
        "Completed a course on CISCO Switching, Routing, and Wireless Essentials, covering all fundamentals.",
      image: "/icons/cisco.svg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.filePdf className="h-4 w-4" />,
          href: "/docs/CISCO-Routing.pdf",
        },
      ],
    },
    {
      title: "Introduction to networks",
      dates: "May 31, 2023",
      location: "Remote",
      description:
        "Completed a course on CISCO networking fundamentals, covering network protocols, topologies, and security.",
      image: "/icons/cisco.svg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.filePdf className="h-4 w-4" />,
          href: "/docs/CISCO-Fundamentals.pdf",
        },
      ],
    },
    {
      title: "SCRUM for software development",
      dates: "May 11, 2023",
      location: "Remote",
      description:
        "Completed a course on SCRUM methodology for software development, covering principles, roles, and practices.",
      image: "/icons/sena.png",
      links: [],
    },
    {
      title: "API RESTful",
      dates: "Apr 12, 2023",
      location: "Remote",
      description:
        "Completed a course on RESTful API development, covering design principles, authentication, and security.",
      image: "/icons/udemy.jpg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.filePdf className="h-4 w-4" />,
          href: "/docs/API.pdf",
        },
      ],
    },
    {
      title: "Professional GIT",
      dates: "Nov 14, 2022",
      location: "Remote",
      description:
        "Completed a course on SCRUM methodology for software development, covering principles, roles, and practices.",
      image: "/icons/codigofacilito.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.filePdf className="h-4 w-4" />,
          href: "/docs/git.pdf",
        },
      ],
    },
    {
      title: "Cambridge Linguaskill",
      dates: "October 21, 2022",
      location: "Remote",
      description:
        "Earned a B1 certification through the Cambridge Linguaskill test, demonstrating effective communication skills in English for professional and academic contexts.",
      image: "/icons/cambridge.png",
      links: [],
    },
    {
      title: "Open English",
      dates: "October 17, 2022",
      location: "Remote",
      description:
        "Obtained a B2 certification from Open English, showcasing advanced proficiency in English, including fluency in conversational and written communication.",
      image: "/icons/open-english.png",
      links: [
        {
          title: "Test Report",
          icon: <Icons.filePdf className="h-4 w-4" />,
          href: "/docs/Open-English.pdf",
        },
      ],
    },
  ],
} as const;
