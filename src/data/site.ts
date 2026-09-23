export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: "shipped" | "private" | "archive";
  summary: string;
  detail: string;
  stack: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "yems",
    name: "YEMS",
    kind: "Full-stack platform",
    status: "private",
    summary:
      "School management for places where the connection drops in the middle of registering a student.",
    detail:
      "The Youth Educational Management System is the project where I stopped owning only the interface. Auth, the API, the business logic, the Postgres schema, the sync engine, six containers and the deploy — all of it had to be reasoned about together, because offline-first is not a frontend feature. A teacher finishes what they started without ever learning the network state underneath.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    slug: "portfolio",
    name: "This site",
    kind: "Static site",
    status: "shipped",
    summary:
      "Hand-built in Astro. No framework runtime, no component library, no analytics watching you.",
    detail:
      "Every page here compiles to plain HTML and CSS. JavaScript shows up in three places only: the navigation island, the command palette, and a clock. The type is handwritten on purpose — a portfolio should look like a person made it.",
    stack: ["Astro", "TypeScript", "CSS"],
    repo: "https://github.com/Erioluwa-dev",
  },
  {
    slug: "todo-app",
    name: "Todo App",
    kind: "Fundamentals",
    status: "archive",
    summary: "The first thing that made state click. Kept because it is where this started.",
    detail:
      "A React and TypeScript task manager — create, read, update, delete, and the moment the shape of application state stopped being a mystery. It is not impressive. It is honest about where the line began.",
    stack: ["React", "TypeScript"],
    repo: "https://github.com/Erioluwa-dev/todo-app",
  },
];

export const statusLabel: Record<Project["status"], string> = {
  shipped: "shipped",
  private: "private repo",
  archive: "early work",
};

export type StackGroup = { group: string; items: string[] };

// Grouped by honest depth rather than by category. Listing Rust beside
// TypeScript would be a claim I have not earned yet.
export const stack: StackGroup[] = [
  {
    group: "Deepest — reach for daily",
    items: ["TypeScript", "React", "Next.js", "Astro", "CSS", "UI/UX"],
  },
  {
    group: "Build the backend with",
    items: ["Node.js", "Bun", "Hono", "PostgreSQL", "Redis", "REST APIs", "Auth"],
  },
  {
    group: "Applied in production",
    items: ["Python", "OpenCV", "Graph ML"],
  },
  {
    group: "Around the work",
    items: ["Docker", "Queues", "Object storage", "Supabase", "Git", "Figma"],
  },
  {
    group: "Active in",
    items: ["Rust", "Systems programming"],
  },
];

export type Letter = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const letters: Letter[] = [
  {
    slug: "why-astro",
    title: "Why I Chose Astro for My Portfolio",
    date: "2026-06-15",
    excerpt:
      "Three rebuilds in, I stopped asking which framework was best and started asking what this site needed.",
  },
  {
    slug: "shipping-solo-projects",
    title: "The Art of Shipping Solo Projects",
    date: "2026-06-01",
    excerpt:
      "Perfectionism is the enemy of shipping. Here is how I learned to cut scope and get things out.",
  },
];

export const social = {
  email: "erioluwafawehinmi@gmail.com",
  github: "https://github.com/Erioluwa-dev",
  instagram: "https://instagram.com/stay.with.eri",
};
