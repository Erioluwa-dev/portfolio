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
  /** Present only on projects that get a spread in the book on the home page. */
  featured?: Featured;
};

export type Fact = { label: string; value: string; detail?: string };

/** What a project's spread needs beyond the card: a shorter story for the
    left page and the facts for the plate on the right. */
export type Featured = {
  story: string;
  note?: string;
  /** The one fact worth the dark tile. */
  headline: Fact & { style: "word" | "number" | "quote" };
  list: { label: string; items: string[] };
  aside: Fact;
  statusShort: string;
  linkLabel: string;
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
    featured: {
      story:
        "School management for places where the connection drops in the middle of registering a student. This is where I stopped owning only the interface: auth, the API, the Postgres schema, the sync engine, six containers and the deploy.",
      note: "A teacher finishes what they started without ever learning the network state underneath.",
      headline: { label: "Built for", value: "Offline-first", detail: "Six containers deep", style: "word" },
      list: { label: "Stack", items: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"] },
      aside: {
        label: "Built with",
        value: "Osibanjo Damilare, Anthony Ochefu, Mohie Daniel, Ikeola Ayomide",
      },
      statusShort: "Live",
      linkLabel: "Visit",
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
    featured: {
      story:
        "Describe a trip in plain language and get back an itinerary you can actually compare: baggage rules, layovers, cancellation terms and fares, side by side, before anyone books. Built during my internship with Osibanjo Damilare.",
      note: "Pre-launch for now, taking a waitlist rather than live bookings.",
      headline: { label: "You type", value: "\u201cLagos to London next month, under $900, non-stop\u201d", style: "quote" },
      list: { label: "Compared side by side", items: ["Baggage", "Layovers", "Cancellation", "Fares"] },
      aside: { label: "Built with", value: "Osibanjo Damilare" },
      statusShort: "Pre-launch",
      linkLabel: "Join the waitlist",
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
    featured: {
      story:
        "The public website for a Christian co-educational secondary school in Sabo-Ojodu, Lagos, running since 2005. It is where families meet the school first: admissions, academics and results, the gallery and events, and a way into the school portal.",
      headline: { label: "Running since", value: "2005", style: "number" },
      list: { label: "What families find", items: ["Admissions", "Application form", "Results", "Gallery", "Events", "Portal"] },
      aside: { label: "Where", value: "Sabo-Ojodu, Lagos" },
      statusShort: "Shipped",
      linkLabel: "Visit",
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
      "Every page here compiles to plain HTML and CSS. JavaScript shows up in four places only: the menu, the search, a clock, and turning the pages of the book on the home page.",
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
