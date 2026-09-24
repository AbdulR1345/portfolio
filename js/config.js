/**
 * Customize your portfolio here — edit this file only.
 */
const PORTFOLIO = {
  name: "Abdul Rahaman",
  role: "Full Stack Developer",
  tagline:
    "I design and ship performant web apps — from polished interfaces to robust APIs and databases. Here's a selection of work I'm proud of.",
  yearsExperience: "3+",
  projectsCount: "7",
  about: [
    "I'm a full stack developer who loves turning complex problems into elegant, accessible software. I work across the entire stack — responsive frontends, scalable backends, and thoughtful data models.",
    "Whether it's a greenfield MVP or evolving an existing product, I focus on clean architecture, performance, and user experience. When I'm not coding, I'm exploring new tools and contributing to open source.",
  ],
  resumeUrl: "#",
  email: "rahamanrahi13@gmail.com",
  contactNote:
    "Open to freelance, full-time roles, and interesting collaborations. Drop a line — I typically reply within 24 hours.",
  social: [
    { label: "GitHub", url: "https://github.com/AbdulR1345", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abdulrahaman13/",
      icon: "linkedin",
    },
    { label: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "REST", "GraphQL"],
    },
    {
      category: "Data & DevOps",
      items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "CI/CD"],
    },
  ],
  projects: [
    {
      id: "ecommerce",
      title: "Nova Commerce",
      category: "fullstack",
      description:
        "Full-featured e-commerce platform with cart, payments, admin dashboard, and real-time inventory sync.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      category: "fullstack",
      description:
        "Production-ready task management app featuring JWT + Google OAuth, task filtering & infinite scroll, profile image uploads, Razorpay subscriptions, and AI summarization using Groq.",
      image: "images/taskflow.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Razorpay"],
      liveUrl: "https://task-flow-six-inky.vercel.app",
      repoUrl: "https://github.com/AbdulR1345/TaskFlow",
      featured: true,
    },
    {
      id: "analytics",
      title: "Insight Dashboard",
      category: "frontend",
      description:
        "Analytics dashboard with interactive charts, custom date ranges, and exportable reports for SaaS metrics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "TypeScript"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      id: "api-gateway",
      title: "API Gateway Hub",
      category: "backend",
      description:
        "Microservices API gateway with rate limiting, JWT auth, request logging, and OpenAPI documentation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tags: ["Node.js", "Redis", "Docker", "OpenAPI"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      id: "blog",
      title: "DevLog CMS",
      category: "fullstack",
      description:
        "Headless CMS-powered developer blog with MDX support, syntax highlighting, and SEO optimization.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      tags: ["Next.js", "MDX", "Contentful"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      id: "weather",
      title: "SkyCast",
      category: "frontend",
      description:
        "Weather app with geolocation, 7-day forecasts, and beautiful animated UI driven by OpenWeather API.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["Vue", "API Integration", "PWA"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false,
    },
  ],
  projectFilters: [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ],
};
