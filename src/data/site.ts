export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: "building" | "shipped" | "private" | "archive";
  summary: string;
  detail: string;
  stack: string[];
  repo?: string;
  live?: string;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    slug: "courtvision",
    name: "CourtVision",
    kind: "Computer vision · LLM",
    status: "building",
    summary:
      "A basketball analyst that watches the tape with you and answers questions about what it saw.",
    detail:
      "CourtVision detects and tracks every player on the floor with YOLOv8 and DeepSORT, reads body position with MediaPipe, and writes what it learns into a per-player tendency database. A Groq-backed LangChain pipeline sits on top so you can ask it plain questions — who drifts left off a screen, who never closes out — and get an answer grounded in the footage. Built solo, on a $0 budget, over 26 weeks.",
    stack: ["Python", "YOLOv8", "DeepSORT", "MediaPipe", "Groq", "LangChain", "Supabase", "Streamlit"],
    repo: "https://github.com/Erioluwa-dev/CourtVision",
    flagship: true,
  },
  {
    slug: "yems",
    name: "YEMS",
    kind: "Offline-first platform",
    status: "private",
    summary:
      "School management for places where the connection drops in the middle of registering a student.",
    detail:
      "The Youth Educational Management System runs offline first and syncs when the network comes back, because that is the actual condition it ships into. Six containers, a Postgres core, and a UI built so a teacher can finish what they started without knowing anything about the network state underneath.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
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
  building: "in progress",
  shipped: "shipped",
  private: "private repo",
  archive: "early work",
};

export type StackGroup = { group: string; items: string[] };

export const stack: StackGroup[] = [
  { group: "Reach for daily", items: ["TypeScript", "React", "Next.js", "Astro", "CSS"] },
  { group: "Comfortable in", items: ["Python", "Nuxt.js", "Flutter", "PostgreSQL", "MongoDB"] },
  { group: "Around the work", items: ["Docker", "Supabase", "Git", "Figma"] },
];

export type Letter = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const letters: Letter[] = [
  {
    slug: "building-courtvision",
    title: "Building CourtVision: A 26-Week Solo Journey",
    date: "2026-07-01",
    excerpt:
      "What it actually takes to teach a camera to read a basketball game when you are the whole team.",
  },
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
