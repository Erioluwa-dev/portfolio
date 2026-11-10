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
  /** Present only on projects featured on the home page. */
  featured?: Featured;
};

/** The shorter story a project tells on the home page. */
export type Featured = {
  story: string;
  note?: string;
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
    image: { src: "/projects/yems.jpg", alt: "The YEMS staff and student portal sign-in screen on a maroon back-to-school backdrop." },
    featured: {
      story:
        "School management for places where the connection drops in the middle of registering a student. This is where I stopped owning only the interface: auth, the API, the Postgres schema, the sync engine, six containers and the deploy.",
      note: "A teacher finishes what they started without ever learning the network state underneath.",
    },
  },
  {
    slug: "deck",
    name: "Deck",
    kind: "Multi-agent orchestration",
    status: "live",
    summary:
      "One place to run Claude Code, Codex, OpenCode and Antigravity side by side, handing work to each other in shared threads.",
    detail:
      "Deck is a workspace for multi-agent workflows: agent CLIs run together in shared threads, pass work between them in the open, and every reply, diff and approval lands in one place, whether that is a terminal, a desktop window or a phone. I contributed to Deck, built its mobile app, and wrote the OpenCode and Antigravity integrations.",
    stack: [],
    live: "https://deck-site-tawny.vercel.app/",
    image: { src: "/projects/deck.jpg", alt: "The Deck landing page: the headline One deck for all your agents beside a woodblock print of travellers crossing a bridge in the rain." },
    featured: {
      story:
        "A workspace for multi-agent workflows: agent CLIs run side by side in shared threads and hand work to each other in the open. I contributed to Deck, built its mobile app, and wrote the OpenCode and Antigravity integrations.",
    },
  },
  {
    slug: "skala",
    name: "Skala",
    kind: "Founding GTM engineer",
    status: "live",
    summary:
      "Bot and abuse scoring that decides at signup, login or checkout whether to allow, challenge or block.",
    detail:
      "Skala scores every signup, login or checkout event for bot risk and returns allow, step-up or block, so fake signups and card testers are stopped at the gate instead of draining a free tier. I joined as the founding GTM engineer and developed the bots.",
    stack: [],
    live: "https://www.skalaio.dev/",
    image: { src: "/projects/skala.jpg", alt: "The Skala landing page with the headline Stop bots from eating your free tier and a sample risk-score response showing a block decision." },
    featured: {
      story:
        "Bot and abuse scoring that decides at signup, login or checkout whether to allow, challenge or block. I joined as the founding GTM engineer and developed the bots.",
    },
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
    image: { src: "/projects/flyaux.jpg", alt: "The Flyaux landing page: an airliner seen from above against a deep blue sky, with a Join the waitlist button." },
    featured: {
      story:
        "Describe a trip in plain language and get back an itinerary you can actually compare: baggage rules, layovers, cancellation terms and fares, side by side, before anyone books. Built during my internship with Osibanjo Damilare.",
      note: "Pre-launch for now, taking a waitlist rather than live bookings.",
    },
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
    image: { src: "/projects/yeshua-high.jpg", alt: "The Yeshua High School home page with the headline Jesus Our Perfect Example and a Register Your Child button." },
    featured: {
      story:
        "The public website for a Christian co-educational secondary school in Sabo-Ojodu, Lagos, running since 2005. It is where families meet the school first: admissions, academics and results, the gallery and events, and a way into the school portal.",
    },
  },
  {
    slug: "portfolio",
    name: "This site",
    kind: "Static site",
    status: "shipped",
    summary:
      "Hand-built in Astro. No framework runtime, no component library, no analytics watching you.",
    detail:
      "Every page here compiles to plain HTML and CSS. JavaScript shows up in four places only: the menu, the search, a clock, and the previews that follow your cursor across the work.",
    stack: ["Astro", "TypeScript", "CSS"],
    repo: "https://github.com/Erioluwa-dev",
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

export type Kit = { label: string; items: string[] };

// Taken from the GitHub profile and the languages of the repos on it, so
// nothing here is a tool I have only read about.
export const kit: Kit[] = [
  { label: "Languages", items: ["TypeScript", "Python", "Dart", "HTML", "CSS"] },
  { label: "Frontend & mobile", items: ["React", "Next.js", "Astro", "Vue", "Nuxt", "Tailwind", "Flutter"] },
  { label: "Backend & data", items: ["Node.js", "Bun", "Hono", "PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { label: "Tools & design", items: ["Git", "GitHub", "Docker", "VS Code", "Figma"] },
  { label: "Agents", items: ["Claude Code", "OpenCode"] },
];

export type Spec = { label: string; value: string };

/** The laptop everything here is built on. */
export const machine: { name: string; specs: Spec[] } = {
  name: "HP Laptop 14",
  specs: [
    { label: "Processor", value: "Intel Core i3-1005G1, 2 cores, 4 threads" },
    { label: "Memory", value: "8 GB" },
    { label: "Graphics", value: "Intel UHD Graphics" },
    { label: "Storage", value: "256 GB SK hynix NVMe SSD" },
    { label: "System", value: "Windows 11" },
  ],
};

/** The short version of the About page, for the preface on the home page. */
export const preface = {
  hook: "Self-taught, in Lagos. I got into code because I wanted to make a Roblox animation",
  hookMark: "without learning to script",
  body: "That did not work. A bootcamp later, the web stopped being something I opened and became something I could make. Now I care less about whether a thing demos well and more about whether it holds up.",
};

export type Principle = { title: string; body: string };

// Ordered by weight: the first gets the largest cell of the golden plate.
export const principles: Principle[] = [
  {
    title: "Built for the connection that drops",
    body: "A demo only has to work once. I build for the school where the network cuts out halfway through a form.",
  },
  { title: "The whole product", body: "Interface first, then every layer it needs to stand on." },
  { title: "Written for next year", body: "Code that still makes sense a year later, on a project nobody funded." },
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
