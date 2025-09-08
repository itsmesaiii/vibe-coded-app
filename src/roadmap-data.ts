import { RoadmapData } from './types';

export const roadmapData: RoadmapData = {
  overview:
    "The journey to becoming a full-stack developer in 2025 spans multiple layers of technology – from mastering the front-end (what users see) to the back-end (server logic and databases), and finally DevOps and deployment. This roadmap is tailored for someone who already has coding experience, focusing on modern, widely-used tools. It also includes optional paths and emerging trends (edge computing, alternative runtimes, microfrontends, etc.) to future-proof your skill set.",
  sections: [
    {
      id: "web-fundamentals",
      title: "1. Web Development Fundamentals",
      emoji: "📚",
      description:
        "Before diving into code, get familiar with how the web works. Understand client-server architecture, how browsers communicate with servers (HTTP/HTTPS), and key web protocols.",
      tasks: [
        {
          id: "web-architecture",
          title: "Learn about web architecture",
          description:
            "Learn about web architecture (client-server model, HTTP/HTTPS, DNS)",
          resources: [
            {
              title: "MDN Web Docs: How the Web works",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
            },
          ],
        },
        {
          id: "dev-env",
          title: "Set up your development environment",
          description:
            "Set up your development environment (VS Code, Git, web browser dev tools)",
          resources: [
            {
              title: "VS Code Setup Guide",
              url: "https://code.visualstudio.com/docs/setup/setup-overview",
            },
            {
              title: "Git Tutorial",
              url: "https://www.atlassian.com/git/tutorials",
            },
          ],
        },
        {
          id: "hello-world",
          title: "Create a simple 'Hello World' web page",
          description:
            "Create a simple 'Hello World' web page and view it in a browser",
          resources: [],
        },
        {
          id: "terminal",
          title: "Learn basic terminal usage",
          description: "Optional: Learn basic terminal usage and shell scripting",
          resources: [
            {
              title: "Shell Scripting Tutorial",
              url: "https://linuxhint.com/shell_scripting_tutorial_beginners/",
            },
          ],
        },
      ],
      nextSections: ["html-css"],
    },
    {
      id: "html-css",
      title: "2. Frontend Basics – HTML & CSS",
      emoji: "🎨",
      description:
        "HTML and CSS are the building blocks of the front end. Even if you've coded in other languages, spend time getting comfortable with these for structuring and styling web pages.",
      tasks: [
        {
          id: "html-fundamentals",
          title: "Learn HTML5 fundamentals",
          description: "Learn HTML5 fundamentals (elements, semantic structure, forms)",
          resources: [
            {
              title: "MDN HTML Tutorial",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
            },
          ],
        },
        {
          id: "css-basics",
          title: "Learn CSS basics",
          description:
            "Learn CSS (selectors, box model, Flexbox, Grid, responsive design)",
          resources: [
            {
              title: "MDN CSS Guide",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
            },
            {
              title: "CSS-Tricks Flexbox Guide",
              url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            },
          ],
        },
        {
          id: "portfolio",
          title: "Build a personal portfolio",
          description: "Build a personal homepage/portfolio using HTML and CSS",
          resources: [],
        },
        {
          id: "css-framework",
          title: "Learn a CSS framework",
          description: "Optional: Learn a CSS framework (Tailwind CSS, Bootstrap)",
          resources: [
            {
              title: "Tailwind CSS Docs",
              url: "https://tailwindcss.com/docs",
            },
          ],
        },
      ],
      nextSections: ["javascript"],
    },
    {
      id: "javascript",
      title: "3. Programming with JavaScript (ES6+)",
      emoji: "⚡",
      description:
        "JavaScript is the lingua franca of web development. Learn modern JavaScript (ES6+) features and concepts to add interactivity to web pages.",
      tasks: [
        {
          id: "js-fundamentals",
          title: "Learn modern JavaScript fundamentals",
          description:
            "Learn modern JavaScript fundamentals (ES6+ features, DOM manipulation)",
          resources: [
            {
              title: "JavaScript.info",
              url: "https://javascript.info/",
            },
            {
              title: "MDN JavaScript Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            },
          ],
        },
        {
          id: "async-js",
          title: "Understand asynchronous JavaScript",
          description:
            "Understand asynchronous JavaScript (callbacks, promises, async/await)",
          resources: [
            {
              title: "JavaScript.info: Promises, async/await",
              url: "https://javascript.info/async",
            },
          ],
        },
        {
          id: "typescript-basics",
          title: "Learn TypeScript basics",
          description: "Learn TypeScript basics",
          resources: [
            {
              title: "TypeScript Handbook",
              url: "https://www.typescriptlang.org/docs/handbook/intro.html",
            },
          ],
        },
        {
          id: "interactive-app",
          title: "Build a simple interactive app",
          description:
            "Build a simple interactive app (e.g., to-do list) using vanilla JS",
          resources: [],
        },
        {
          id: "module-bundlers",
          title: "Learn about module bundlers/build tools",
          description: "Learn about module bundlers/build tools (Vite, Webpack, Parcel)",
          resources: [
            {
              title: "Vite Official Docs",
              url: "https://vitejs.dev/guide/",
            },
            {
              title: "Webpack Documentation",
              url: "https://webpack.js.org/concepts/",
            },
          ],
        },
      ],
      nextSections: ["frontend-frameworks"],
    },
    {
      id: "frontend-frameworks",
      title: "4. Modern Frontend Frameworks – React & Next.js",
      emoji: "⚛️",
      description:
        "Learn React, the most popular frontend library, and Next.js, a powerful React framework. These tools make it easier to build complex user interfaces.",
      tasks: [
        {
          id: "react-fundamentals",
          title: "Learn React fundamentals",
          description: "Learn React fundamentals (components, props, state, hooks)",
          resources: [
            {
              title: "React Official Documentation",
              url: "https://react.dev/",
            },
          ],
        },
        {
          id: "state-management",
          title: "Learn state management",
          description: "Learn state management (Context API, optional: Redux Toolkit)",
          resources: [
            {
              title: "React Context API Guide",
              url: "https://react.dev/learn/passing-data-deeply-with-context",
            },
          ],
        },
        {
          id: "typescript-react",
          title: "Learn TypeScript with React",
          description: "Learn TypeScript with React",
          resources: [
            {
              title: "React TypeScript Cheatsheet",
              url: "https://github.com/typescript-cheatsheets/react",
            },
          ],
        },
        {
          id: "nextjs",
          title: "Learn Next.js",
          description: "Learn Next.js (SSR, file-based routing, API routes)",
          resources: [
            {
              title: "Next.js Tutorial",
              url: "https://nextjs.org/learn",
            },
          ],
        },
        {
          id: "mid-sized-project",
          title: "Build a mid-sized frontend project",
          description: "Build a mid-sized frontend project with React or Next.js",
          resources: [],
        },
        {
          id: "advanced-react",
          title: "Explore advanced React patterns",
          description:
            "Optional: Explore advanced React patterns (custom hooks, performance optimization, code splitting)",
          resources: [],
        },
        {
          id: "data-fetching",
          title: "Explore React Query or SWR",
          description: "Optional: Explore React Query or SWR for data fetching and caching",
          resources: [
            {
              title: "React Query Docs",
              url: "https://tanstack.com/query/latest",
            },
            {
              title: "SWR Docs",
              url: "https://swr.vercel.app/docs/getting-started",
            },
          ],
        },
        {
          id: "server-components",
          title: "Explore Next.js server components",
          description: "Optional: Explore Next.js server components (App Router in Next.js 13+)",
          resources: [
            {
              title: "Next.js 13 Release Blog",
              url: "https://nextjs.org/blog/next-13",
            },
          ],
        },
        {
          id: "alternative-frameworks",
          title: "Consider alternative or emerging frameworks",
          description:
            "Optional: Consider alternative or emerging frameworks (Remix, SvelteKit, Vue, Angular)",
          resources: [
            {
              title: "Remix Docs",
              url: "https://remix.run/docs/en/v1",
            },
            {
              title: "SvelteKit Docs",
              url: "https://kit.svelte.dev/docs/introduction",
            },
          ],
        },
        {
          id: "microfrontends",
          title: "Explore microfrontends",
          description:
            "Optional: Explore microfrontends (Webpack Module Federation, single-spa, Bit.dev)",
          resources: [],
        },
      ],
      nextSections: ["backend-development"],
    },
    {
      id: "backend-development",
      title: "5. Backend Development – Node.js (and/or Python)",
      emoji: "🖥️",
      description:
        "Expand to backend development to handle server-side logic, data processing, and business logic. Focus on either Node.js or Python, but stay aware of alternative runtimes (Deno, Bun).",
      tasks: [
        {
          id: "backend-language",
          title: "Choose and learn a backend language/framework",
          description:
            "Choose and learn a backend language/framework (Node.js/Express or Python/Django)",
          resources: [
            {
              title: "Express.js Documentation",
              url: "https://expressjs.com/",
            },
            {
              title: "MDN Express/Node Introduction",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            },
            {
              title: "Django Official Docs",
              url: "https://docs.djangoproject.com/en/stable/",
            },
          ],
        },
        {
          id: "server-side-concepts",
          title: "Learn server-side programming concepts",
          description: "Learn server-side programming concepts (routing, middleware, error handling)",
          resources: [],
        },
        {
          id: "typescript-backend",
          title: "Learn TypeScript on the backend",
          description: "Learn TypeScript on the backend (if using Node.js)",
          resources: [
            {
              title: "TypeScript Node.js Setup",
              url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
            },
          ],
        },
        {
          id: "restful-api",
          title: "Build a simple RESTful API",
          description: "Build a simple RESTful API",
          resources: [],
        },
        {
          id: "alternative-runtimes",
          title: "Explore alternative runtimes",
          description:
            "Optional: Explore alternative runtimes (Deno, Bun) for server-side JS/TS",
          resources: [
            {
              title: "Deno Docs",
              url: "https://deno.land/manual",
            },
            {
              title: "Bun Docs",
              url: "https://bun.sh/docs",
            },
          ],
        },
        {
          id: "serverless-functions",
          title: "Explore serverless functions",
          description:
            "Optional: Explore serverless functions (AWS Lambda, Vercel, Netlify) as an alternative to traditional servers",
          resources: [],
        },
      ],
      nextSections: ["databases"],
    },
    {
      id: "databases",
      title: "6. Database Management – SQL and NoSQL",
      emoji: "🗄️",
      description:
        "Learn to store and retrieve data using databases. Understand the differences between relational (SQL) and non-relational (NoSQL) databases.",
      tasks: [
        {
          id: "sql-fundamentals",
          title: "Learn SQL fundamentals",
          description:
            "Learn SQL fundamentals and a relational database (PostgreSQL/MySQL)",
          resources: [
            {
              title: "SQLBolt Interactive SQL Tutorial",
              url: "https://sqlbolt.com/",
            },
            {
              title: "PostgreSQL Documentation",
              url: "https://www.postgresql.org/docs/",
            },
          ],
        },
        {
          id: "nosql-database",
          title: "Learn a NoSQL database",
          description: "Learn a NoSQL database (MongoDB recommended)",
          resources: [
            {
              title: "MongoDB University",
              url: "https://university.mongodb.com/",
            },
          ],
        },
        {
          id: "orms",
          title: "Learn to use ORMs/query builders",
          description: "Learn to use ORMs/query builders (Prisma, Sequelize, or Mongoose)",
          resources: [
            {
              title: "Prisma Documentation",
              url: "https://www.prisma.io/docs/",
            },
          ],
        },
        {
          id: "extend-api",
          title: "Extend your API project to use a real database",
          description: "Extend your API project to use a real database",
          resources: [],
        },
        {
          id: "serverless-databases",
          title: "Explore serverless database providers",
          description:
            "Optional: Explore serverless database providers (PlanetScale, Neon, MongoDB Atlas)",
          resources: [],
        },
        {
          id: "caching",
          title: "Learn about caching",
          description:
            "Optional: Learn about caching (Redis, Memcached) and in-memory data stores",
          resources: [],
        },
      ],
      nextSections: ["api-development"],
    },
    {
      id: "api-development",
      title: "7. Building APIs and Backend Services",
      emoji: "🌐",
      description:
        "Focus on designing and implementing APIs and adding more advanced backend features like authentication, authorization, and security.",
      tasks: [
        {
          id: "rest-api-design",
          title: "Design RESTful APIs with best practices",
          description: "Design RESTful APIs with best practices",
          resources: [
            {
              title: "REST API Design Best Practices",
              url: "https://restfulapi.net/",
            },
          ],
        },
        {
          id: "auth",
          title: "Implement Authentication & Authorization",
          description: "Implement Authentication & Authorization (JWT, OAuth)",
          resources: [
            {
              title: "Auth0 JWT Authentication Guide",
              url: "https://auth0.com/learn/json-web-tokens/",
            },
          ],
        },
        {
          id: "web-security",
          title: "Learn web security best practices",
          description: "Learn web security best practices (CORS, XSS, CSRF, SQL injection)",
          resources: [
            {
              title: "OWASP Web Security Cheat Sheet",
              url: "https://cheatsheetseries.owasp.org/",
            },
          ],
        },
        {
          id: "graphql",
          title: "Learn GraphQL",
          description: "Optional: Learn GraphQL",
          resources: [
            {
              title: "Apollo GraphQL Tutorial",
              url: "https://www.apollographql.com/docs/tutorial/introduction/",
            },
          ],
        },
        {
          id: "secure-api",
          title: "Add authentication and security to your API project",
          description: "Add authentication and security to your API project",
          resources: [],
        },
        {
          id: "advanced-api",
          title: "Explore advanced API features",
          description:
            "Optional: Explore advanced API features (rate limiting, caching, GraphQL federation, tRPC)",
          resources: [],
        },
        {
          id: "payment-integration",
          title: "Integrate payment services",
          description:
            "Optional: Integrate payment services (Stripe, PayPal) and email providers (SendGrid, Resend)",
          resources: [],
        },
        {
          id: "schema-validation",
          title: "Use schema validation",
          description: "Optional: Use schema validation (Zod, Yup) for robust APIs",
          resources: [],
        },
      ],
      nextSections: ["devops"],
    },
    {
      id: "devops",
      title: "8. DevOps Basics – Git, CI/CD, and Containerization",
      emoji: "🔄",
      description:
        "Learn operational tools and practices to efficiently ship and maintain your applications. This includes version control, continuous integration, containerization, and basic observability.",
      tasks: [
        {
          id: "git-knowledge",
          title: "Deepen your Git knowledge",
          description: "Deepen your Git knowledge (branching, collaborative workflows)",
          resources: [
            {
              title: "Pro Git Book",
              url: "https://git-scm.com/book/en/v2",
            },
          ],
        },
        {
          id: "ci-cd",
          title: "Learn CI/CD basics",
          description: "Learn CI/CD basics (GitHub Actions or similar)",
          resources: [
            {
              title: "GitHub Actions Documentation",
              url: "https://docs.github.com/en/actions",
            },
          ],
        },
        {
          id: "docker-basics",
          title: "Learn Docker basics",
          description: "Learn Docker basics (containers, images, Dockerfile)",
          resources: [
            {
              title: "Docker Get Started Guide",
              url: "https://docs.docker.com/get-started/",
            },
          ],
        },
        {
          id: "cloud-services",
          title: "Understand cloud services concepts",
          description: "Understand cloud services concepts (AWS/Azure/GCP)",
          resources: [
            {
              title: "AWS Free Tier",
              url: "https://aws.amazon.com/free/",
            },
          ],
        },
        {
          id: "ci-docker",
          title: "Implement CI and Docker for your project",
          description: "Implement CI and Docker for your project",
          resources: [],
        },
        {
          id: "docker-compose",
          title: "Use Docker Compose for local multi-service development",
          description: "Use Docker Compose for local multi-service development",
          resources: [],
        },
        {
          id: "kubernetes",
          title: "Learn the basics of Kubernetes",
          description: "Learn the basics of Kubernetes for container orchestration",
          resources: [
            {
              title: "Kubernetes Documentation",
              url: "https://kubernetes.io/docs/home/",
            },
          ],
        },
        {
          id: "monitoring-logging",
          title: "Set up basic monitoring and logging",
          description: "Set up basic monitoring and logging (Prometheus, Grafana, ELK stack)",
          resources: [],
        },
        {
          id: "infrastructure-as-code",
          title: "Explore Infrastructure as Code",
          description:
            "Optional: Explore Infrastructure as Code (Terraform, AWS CDK, Pulumi)",
          resources: [],
        },
        {
          id: "monorepo-tools",
          title: "Explore monorepo tools",
          description: "Optional: Explore monorepo tools (Nx, Turborepo)",
          resources: [],
        },
      ],
      nextSections: ["testing"],
    },
    {
      id: "testing",
      title: "9. Testing and Quality Assurance",
      emoji: "🧪",
      description:
        "Learn to test your code to ensure quality and prevent regressions as your projects grow.",
      tasks: [
        {
          id: "unit-testing",
          title: "Learn unit testing",
          description: "Learn unit testing (Jest for JavaScript/TypeScript)",
          resources: [
            {
              title: "Jest Documentation",
              url: "https://jestjs.io/docs/getting-started",
            },
          ],
        },
        {
          id: "react-testing",
          title: "Learn to test React components",
          description: "Learn to test React components (React Testing Library)",
          resources: [
            {
              title: "React Testing Library",
              url: "https://testing-library.com/docs/react-testing-library/intro",
            },
          ],
        },
        {
          id: "api-testing",
          title: "Learn API/integration testing",
          description: "Learn API/integration testing",
          resources: [
            {
              title: "Supertest for Node.js",
              url: "https://github.com/visionmedia/supertest",
            },
          ],
        },
        {
          id: "e2e-testing",
          title: "Learn E2E testing",
          description: "Optional: Learn E2E testing (Cypress or Playwright)",
          resources: [
            {
              title: "Cypress Documentation",
              url: "https://docs.cypress.io/guides/overview/why-cypress",
            },
            {
              title: "Playwright Docs",
              url: "https://playwright.dev/docs/intro",
            },
          ],
        },
        {
          id: "vitest",
          title: "Explore Vitest",
          description: "Optional: Explore Vitest (Vite-native testing)",
          resources: [
            {
              title: "Vitest Docs",
              url: "https://vitest.dev/",
            },
          ],
        },
        {
          id: "add-tests",
          title: "Add tests to your project",
          description: "Add tests to your project",
          resources: [],
        },
      ],
      nextSections: ["deployment"],
    },
    {
      id: "deployment",
      title: "10. Deployment and Cloud Hosting",
      emoji: "☁️",
      description:
        "Learn to deploy your full-stack application to make it available on the internet, using cloud platforms and hosting services.",
      tasks: [
        {
          id: "frontend-deployment",
          title: "Learn to deploy frontend apps",
          description: "Learn to deploy frontend apps (Vercel, Netlify)",
          resources: [
            {
              title: "Vercel Documentation",
              url: "https://vercel.com/docs",
            },
            {
              title: "Netlify Documentation",
              url: "https://docs.netlify.com/",
            },
          ],
        },
        {
          id: "backend-deployment",
          title: "Learn to deploy backend and databases",
          description: "Learn to deploy backend and databases (Heroku, Railway, AWS)",
          resources: [
            {
              title: "Heroku Dev Center",
              url: "https://devcenter.heroku.com/",
            },
          ],
        },
        {
          id: "env-vars",
          title: "Learn about environment variables and configuration",
          description: "Learn about environment variables and configuration",
          resources: [],
        },
        {
          id: "dns-setup",
          title: "Learn DNS and domain setup",
          description: "Learn DNS and domain setup",
          resources: [],
        },
        {
          id: "deploy-project",
          title: "Deploy your full-stack project",
          description: "Deploy your full-stack project",
          resources: [],
        },
        {
          id: "custom-domain",
          title: "Set up a custom domain and DNS",
          description: "Set up a custom domain and DNS (e.g., Cloudflare, Route53)",
          resources: [],
        },
        {
          id: "serverless-edge",
          title: "Explore serverless/edge deployment",
          description:
            "Optional: Explore serverless/edge deployment (Cloudflare Workers, Vercel Edge, Netlify Edge)",
          resources: [],
        },
        {
          id: "container-orchestration",
          title: "Use container orchestration for production",
          description:
            "Optional: Use container orchestration for production (ECS, EKS, GKE)",
          resources: [],
        },
      ],
      nextSections: ["next-steps"],
    },
    {
      id: "next-steps",
      title: "Next Steps and Continuous Learning",
      emoji: "🚀",
      description:
        "Continue learning and expanding your skills as a full-stack developer. Build more complex projects and explore advanced or emerging topics.",
      tasks: [
        {
          id: "portfolio-projects",
          title: "Build portfolio projects to showcase your skills",
          description: "Build portfolio projects to showcase your skills",
          resources: [],
        },
        {
          id: "performance-optimization",
          title: "Learn performance optimization techniques",
          description: "Learn performance optimization techniques (Lighthouse, Web Vitals)",
          resources: [],
        },
        {
          id: "pwas",
          title: "Explore Progressive Web Apps",
          description: "Explore Progressive Web Apps (PWAs)",
          resources: [],
        },
        {
          id: "mobile-development",
          title: "Consider mobile development",
          description: "Consider mobile development (React Native, Flutter)",
          resources: [],
        },
        {
          id: "stay-updated",
          title: "Stay updated on new technologies and best practices",
          description: "Stay updated on new technologies and best practices",
          resources: [
            {
              title: "State of JavaScript",
              url: "https://stateofjs.com/",
            },
            {
              title: "Dev.to",
              url: "https://dev.to/",
            },
          ],
        },
        {
          id: "advanced-topics",
          title: "Learn advanced topics",
          description:
            "Learn advanced topics: microservices, domain-driven design, message queues (RabbitMQ, Kafka), event-driven architecture",
          resources: [],
        },
        {
          id: "ai-ml",
          title: "Explore AI/ML integration or AI-based coding assistants",
          description:
            "Optional: Explore AI/ML integration or AI-based coding assistants (e.g., ChatGPT, GitHub Copilot)",
          resources: [],
        },
        {
          id: "advanced-observability",
          title: "Experiment with advanced observability",
          description:
            "Optional: Experiment with advanced observability (Sentry, Datadog, New Relic, LogRocket)",
          resources: [],
        },
        {
          id: "monorepo-workflows",
          title: "Explore advanced monorepo or multi-package workflows",
          description:
            "Optional: Explore advanced monorepo or multi-package workflows (Nx, Turborepo)",
          resources: [],
        },
      ],
      nextSections: [],
    },
  ],
};
