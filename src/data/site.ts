export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: "live" | "prelaunch" | "shipped" | "private" | "archive";
  summary: string;
  detail: string;
  /** Left empty rather than guessed when I can't vouch for the whole stack. */
  stack: string[];
  /** People who built it with me, credited on the card. */
  collaborators?: { name: string; url?: string }[];
  repo?: string;
  live?: string;
  /** A screenshot in /public, e.g. { src: "/projects/yems.png", alt: "…" }. */
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "yems",
    name: "YEMS",
    kind: "Full-stack platform",
    status: "live",
    summary:
      "School management for places where the connection drops in the middle of registering a student.",
    detail:
      "The Youth Educational Management System is the project where I stopped owning only the interface. Auth, the API, the business logic, the Postgres schema, the sync engine, six containers and the deploy — all of it had to be reasoned about together, because offline-first is not a frontend feature. A teacher finishes what they started without ever learning the network state underneath.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    collaborators: [
      { name: "Osibanjo Damilare", url: "https://github.com/dev-dami" },
      { name: "Anthony Ochefu" },
      { name: "Mohie Daniel" },
      { name: "Ikeola Ayomide" },
    ],
    live: "https://home.yeshuahigh.com",
  },
  {
    slug: "flyaux",
    name: "Flyaux",
    kind: "Internship, AI flight search",
    status: "prelaunch",
    summary:
      "Describe a trip in plain language and get back an itinerary you can actually compare.",
    detail:
      "Flyaux turns a sentence like \"Lagos to London next month, under $900, non-stop\" into a refined itinerary through a chat-like flow, laying out baggage rules, layovers, cancellation terms and fares side by side before anyone books. I built it during my internship, working alongside Osibanjo Damilare on all of it. It is pre-launch for now, taking a waitlist rather than live bookings.",
    stack: [],
    collaborators: [{ name: "Osibanjo Damilare", url: "https://github.com/dev-dami" }],
    live: "https://ai.flyaux.com",
  },
  {
    slug: "yeshua-high",
    name: "Yeshua High School",
    kind: "School website",
    status: "shipped",
    summary:
      "The public website for a Christian co-educational secondary school in Sabo-Ojodu, Lagos.",
    detail:
      "Yeshua High School has been running since 2005, and the site is where families meet it first: admissions and an application form, academics and results, the gallery and events, the school's mission, contact details and a way into the school portal.",
    stack: [],
    live: "https://www.yeshuahigh.com",
  },
  {
    slug: "portfolio",
    name: "This site",
    kind: "Static site",
    status: "shipped",
    summary:
      "Hand-built in Astro. No framework runtime, no component library, no analytics watching you.",
    detail:
      "Every page here compiles to plain HTML and CSS. JavaScript shows up in three places only: the menu, the search, and a clock.",
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
  live: "Deployed and live",
  prelaunch: "Pre-launch, waitlist open",
  shipped: "Shipped",
  private: "Private repo",
  archive: "Early work",
};

export type Layer = { name: string; role: string; tools: string[] };

// Top to bottom, the way a request travels: what someone touches first,
// then everything underneath that has to hold for it to work.
export const layers: Layer[] = [
  { name: "Interface", role: "What people touch", tools: ["TypeScript", "React", "Next.js", "Astro", "CSS", "Figma"] },
  { name: "Server", role: "What answers them", tools: ["Node.js", "Bun", "Hono", "REST APIs", "Auth"] },
  { name: "Data", role: "What remembers", tools: ["PostgreSQL", "Redis", "Supabase", "Queues", "Object storage"] },
  { name: "Infrastructure", role: "What it runs on", tools: ["Docker", "Git"] },
  { name: "Models", role: "What it learns", tools: ["Python", "OpenCV", "Graph ML"] },
];

// Kept apart from the layers: listing Rust beside TypeScript would be a
// claim I have not earned yet.
export const learning = ["Rust", "systems programming"];

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
