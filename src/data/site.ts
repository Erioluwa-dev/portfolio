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
    kind: "Computer vision · Applied ML",
    status: "building",
    summary:
      "A basketball analyst that watches the tape with you and answers questions about what it saw.",
    detail:
      "The whole pipeline is mine: detection, tracking, team classification, possession inference, then the statistics that fall out of it — trajectories, heatmaps, shot analysis. YOLOv8 and DeepSORT hold identity through traffic, MediaPipe reads body position, and every player's tendencies get written into a database a Groq-backed LangChain layer can be asked about in plain English. Machine learning is the computation here, not an API call bolted onto a UI. Built solo, on a $0 budget, over 26 weeks.",
    stack: ["Python", "YOLOv8", "DeepSORT", "MediaPipe", "OpenCV", "Groq", "LangChain", "Supabase", "Streamlit"],
    repo: "https://github.com/Erioluwa-dev/CourtVision",
    flagship: true,
  },
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
    slug: "song-graph",
    name: "Song Graph",
    kind: "Graph ML · Recommenders",
    status: "building",
    summary:
      "Music recommendation as a graph problem — users and tracks as nodes, taste as the edges between them.",
    detail:
      "A graph neural network over a user–item graph, learning embeddings that carry more than a similarity score does: who listens adjacent to whom, and which tracks sit between two scenes. I am not claiming GNN expertise. I am claiming I wanted to understand recommendation from the representation up rather than by importing someone's ranker.",
    stack: ["Python", "PyTorch", "PyTorch Geometric", "Pandas"],
  },
  {
    slug: "claw-code-parity",
    name: "claw-code-parity",
    kind: "Systems · Rust",
    status: "building",
    summary:
      "A deliberate trip outside the TypeScript ecosystem, into a language that will not let things slide.",
    detail:
      "Rust for the reason most people pick it up: ownership, lifetimes and an unforgiving compiler teach you what the runtime had been quietly covering for. This is exploration, not a specialisation — but I would rather learn the tool a problem asks for than reshape the problem to fit the tools I already have.",
    stack: ["Rust", "Cargo"],
  },
  {
    slug: "whatsapp-clone",
    name: "WhatsApp Clone",
    kind: "Realtime interface",
    status: "shipped",
    summary:
      "Chat is the honest test of interface work — presence, ordering, and state that never sits still.",
    detail:
      "Threads, message state, optimistic sends and a layout that has to stay composed while data arrives out of order. Rebuilding something people use every day is unforgiving in a useful way: the bar is not whether it works, it is whether it feels like the thing.",
    stack: ["React", "TypeScript", "Realtime", "CSS"],
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
    group: "Growing — real projects, still learning",
    items: ["Python", "PyTorch", "Computer vision", "YOLO", "OpenCV", "Graph ML"],
  },
  {
    group: "Around the work",
    items: ["Docker", "Queues", "Object storage", "Supabase", "Git", "Figma"],
  },
  {
    group: "Exploring on purpose",
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
