import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "CourtVision", href: "#courtvision" },
];

const technologies = [
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Nuxt.js", icon: "nuxtdotjs" },
  { name: "Flutter/Dart", icon: "flutter" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "LangChain", icon: "langchain" },
  { name: "Supabase", icon: "supabase" },
];

const projects = [
  {
    name: "Todo App",
    desc: "CRUD fundamentals. Where it started.",
    tag: "Public",
    tagColor: "#00DC82",
    stack: ["React", "TypeScript"],
    github: "https://github.com/Erioluwa-dev/todo-app",
  },
  {
    name: "YEMS",
    fullName: "Youth Educational Management System",
    desc: "Offline-first school management system built for low-connectivity environments. Six-container Docker setup, real constraints, real solutions.",
    tag: "Private",
    tagColor: "#555",
    stack: ["Next.js", "PostgreSQL", "Docker", "TypeScript"],
  },
  {
    name: "CourtVision",
    desc: "A conversational AI basketball analyst. Watches game footage, tracks players with YOLOv8 + DeepSORT, analyzes movement with MediaPipe, builds per-player tendency profiles in Supabase, and delivers real-time play-by-play commentary via Groq LLM and LangChain. The gap it fills: no public tool combines live film study, player tendency modeling, and a conversational analyst interface. Built solo. $0 budget.",
    tag: "In Progress",
    tagColor: "#54C5F8",
    stack: [
      "Python",
      "YOLOv8",
      "DeepSORT",
      "MediaPipe",
      "Groq API",
      "LangChain",
      "Supabase",
      "Streamlit",
    ],
    isFlagship: true,
    mission: '"Film study. Tendency engine. Real-time intelligence."',
    github: "https://github.com/Erioluwa-dev/CourtVision",
  },
];

function ProjectCard({ project }) {
  return (
    <div
      id={project.name === "CourtVision" ? "courtvision" : undefined}
      style={{
        border: project.isFlagship
          ? "1px solid #54C5F840"
          : "1px solid #1a1a1a",
        borderLeft: project.isFlagship
          ? "3px solid #54C5F8"
          : "1px solid #1a1a1a",
        padding: "1.2rem",
        borderRadius: 3,
        background: project.isFlagship ? "#54C5F808" : "#0d0d0d",
        position: "relative",
      }}
    >
      {/* Name + Tag row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.6rem",
          marginBottom: "0.6rem",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            color: project.isFlagship ? "#54C5F8" : "#fff",
            fontWeight: 600,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          {project.isFlagship && (
            <span
              style={{
                fontSize: "0.7rem",
                color: "#54C5F8",
                border: "1px solid #54C5F860",
                padding: "0.15rem 0.45rem",
                borderRadius: 2,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              [ ACTIVE BUILD ]
            </span>
          )}
          <span
            style={{
              fontSize: "0.7rem",
              color: project.tagColor,
              border: `1px solid ${project.tagColor}50`,
              padding: "0.15rem 0.4rem",
              borderRadius: 2,
              letterSpacing: 1,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {project.tag}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          margin: "0 0 0.6rem",
          fontSize: "0.9rem",
          color: "#bbb",
          lineHeight: 1.6,
          maxWidth: 580,
        }}
      >
        {project.desc}
      </p>

      {/* Mission (flagship only) */}
      {project.mission && (
        <div
          style={{
            fontSize: "1rem",
            color: "#54C5F8",
            fontStyle: "italic",
            marginBottom: "0.6rem",
            opacity: 0.85,
          }}
        >
          {project.mission}
        </div>
      )}

      {/* Stack chips */}
      {project.stack && project.stack.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            flexWrap: "wrap",
            marginBottom: "0.8rem",
          }}
        >
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.95rem",
                color: "#999",
                border: "1px solid #333333",
                padding: "0.15rem 0.5rem",
                borderRadius: 2,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Project link icon (bottom-right) */}
      {(project.url || project.github) && (
        <a
          href={project.url || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-icon"
          style={{
            position: "absolute",
            bottom: "0.6rem",
            right: "0.6rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: 3,
            background: "#1a1a1a",
            border: "1px solid #333",
            textDecoration: "none",
            transition: "all 0.18s ease",
          }}
          title={project.url ? "View live site" : "View source code"}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {project.url ? (
              <>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </>
            ) : (
              <>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </>
            )}
          </svg>
        </a>
      )}
    </div>
  );
}

function Navbar({ activeSection, onNavClick, visible }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: visible
          ? "translateX(-50%)"
          : "translateX(-50%) translateY(-120%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 100,
        background: "#0d0d0d",
        border: "1px solid #2a2a2a",
        borderRadius: 8,
        padding: "0.5rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontFamily: "'Lora', Georgia, serif",
        width: "fit-content",
        maxWidth: 680,
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid #555",
          background: "#1a1a1a",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <img
          src="/brand.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Name */}
      <a
        href="#top"
        onClick={(e) => onNavClick(e, "#top")}
        style={{
          fontSize: "0.97rem",
          color: "#fff",
          textDecoration: "none",
          whiteSpace: "nowrap",
          fontWeight: 700,
        }}
      >
        Fawehinmi Erioluwa
      </a>

      {/* Vertical divider */}
      <div
        style={{
          width: 1,
          height: 16,
          background: "#2a2a2a",
          margin: "0 1rem",
          flexShrink: 0,
        }}
      />

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          flexShrink: 0,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => onNavClick(e, link.href)}
            style={{
              fontSize: "0.9rem",
              color:
                activeSection === link.href.replace("#", "")
                  ? "#f0ebe3"
                  : "#d4cfc8",
              textDecoration: "none",
              letterSpacing: 1,
              fontWeight: 600,
              transition: "color 0.15s",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* GitHub */}
      <a
        href="https://github.com/erioluwafawehinmi"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.95rem",
          color: "#555",
          textDecoration: "none",
          transition: "color 0.15s",
          marginLeft: "0.3rem",
        }}
      >
        &#x2328;
      </a>
    </nav>
  );
}

function TypewriterQuote({ text }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("forward");
  const [tick, setTick] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (phase === "forward") {
      if (count < text.length) {
        const t = setTimeout(() => setCount((c) => c + 1), 40);
        return () => clearTimeout(t);
      }
      setPhase("pause");
    } else if (phase === "pause") {
      const t = setTimeout(() => setPhase("backward"), 2000);
      return () => clearTimeout(t);
    } else if (phase === "backward") {
      if (count > 0) {
        const t = setTimeout(() => setCount((c) => c - 1), 20);
        return () => clearTimeout(t);
      }
      setPhase("wait");
    } else if (phase === "wait") {
      const t = setTimeout(() => setPhase("forward"), 800);
      return () => clearTimeout(t);
    }
  }, [count, phase, text.length]);

  return (
    <div
      style={{
        fontSize: "0.9rem",
        color: "#ccc",
        fontStyle: "italic",
        marginBottom: "1.2rem",
        padding: "0 0.5rem",
        minHeight: "1.2rem",
        textAlign: "center",
      }}
    >
      &mdash; {text.slice(0, count)}
      <span style={{ color: "#00DC82", opacity: tick ? 1 : 0 }}>
        {"\u258C"}
      </span>
    </div>
  );
}

function CTASection({ onNavClick }) {
  const buttons = [
    { label: "View Projects", href: "#projects" },
    { label: "About Me", href: "#about" },
    { label: "CourtVision", href: "#courtvision" },
  ];

  const btnStyle = {
    fontSize: "0.85rem",
    color: "#aaa",
    background: "transparent",
    border: "1px solid #2a2a2a",
    padding: "0.4rem 1rem",
    borderRadius: 2,
    cursor: "pointer",
    textDecoration: "none",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "inherit",
    transition: "all 0.18s ease",
  };

  const iconStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    border: "1px solid #2a2a2a",
    borderRadius: 2,
    transition: "all 0.18s ease",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          onClick={(e) => onNavClick(e, b.href)}
          className="cta-btn"
          style={btnStyle}
        >
          {b.label}
        </a>
      ))}
      <a
        href="https://github.com/erioluwafawehinmi"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn icon-github"
        style={iconStyle}
      >
        <img
          src="https://cdn.simpleicons.org/github/aaa"
          alt="GitHub"
          style={{ width: 16, height: 16, display: "block" }}
        />
      </a>
      <a href="mailto:erioluwafawehinmi@gmail.com" className="icon-btn icon-email" style={iconStyle}>
        <img
          src="https://cdn.simpleicons.org/gmail/aaa"
          alt="Email"
          style={{ width: 16, height: 16, display: "block" }}
        />
      </a>
      <a
        href="https://instagram.com/stay.with.eri"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn icon-instagram"
        style={iconStyle}
      >
        <img
          src="https://cdn.simpleicons.org/instagram/aaa"
          alt="Instagram"
          style={{ width: 16, height: 16, display: "block" }}
        />
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);
  const observerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observerRef.current.observe(s));

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setNavbarVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        setNavbarVisible(false);
      } else if (currentY < lastScrollY.current - 8) {
        setNavbarVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setNavbarVisible(true);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        fontFamily: "'Lora', Georgia, serif",
        color: "#e0e0e0",
        margin: 0,
        position: "relative",
      }}
    >
      {/* Scanline overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 10,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        visible={navbarVisible}
      />

      {/* Main content offset for fixed nav */}
      <main
        className="page-content"
        style={{
          paddingTop: "72px",
          paddingLeft: "200px",
          paddingRight: "4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Hero Section ── */}
        <section
          id="top"
          style={{
            maxWidth: 860,
            margin: 0,
            padding: "3rem 0 0",
            display: "flex",
            gap: 0,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Avatar above text */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                border: "1px solid #1e1e1e",
                borderRadius: 4,
                background: "#0d0d0d",
                overflow: "hidden",
              }}
            >
              <img
                src="/brand.jpg"
                alt="Fawehinmi Erioluwa"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Text content below avatar */}
          <div style={{ width: "100%" }}>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 800,
                margin: "0 0 0.3rem",
                color: "#fff",
                lineHeight: 1.15,
                fontFamily: "'Lora', Georgia, serif",
                textAlign: "center",
              }}
            >
              Fawehinmi Erioluwa
            </h1>
            <div
              style={{
                fontSize: "0.95rem",
                color: "#555",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: "0.8rem",
                textAlign: "center",
              }}
            >
              17 years old &middot; Frontend Engineer
            </div>
            <div
              style={{
                fontSize: "1rem",
                color: "#fff",
                fontWeight: 700,
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              &gt; Frontend Engineer (+ backend instincts)
            </div>

            <p
              style={{
                fontSize: "0.97rem",
                color: "#e0e0e0",
                lineHeight: 1.8,
                margin: "0 auto 0.6rem",
                maxWidth: 620,
                textAlign: "center",
              }}
            >
              Building offline-first systems, AI-powered tools, and frontend
              interfaces from Lagos, Nigeria. Self-taught. Always learning.
              Currently deep in a 26-week solo build of CourtVision &mdash; a
              computer vision basketball analyst.
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <TypewriterQuote
                text={
                  "\u201cThe first step to greatness is taking action.\u201d"
                }
              />
            </div>

            <div
              style={{
                marginTop: "1rem",
                paddingBottom: "2.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CTASection onNavClick={handleNavClick} />
            </div>
          </div>
        </section>

        {/* ── Technologies ── */}
        <section
          id="technologies"
          style={{
            maxWidth: 860,
            margin: 0,
            padding: "0 0 2.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: "0.8rem",
            }}
          >
            // technologies
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {technologies.map((t) => (
              <span
                key={t.name}
                style={{
                  fontSize: "0.85rem",
                  color: "#999",
                  border: "1px solid #333333",
                  padding: "0.25rem 0.7rem",
                  borderRadius: 3,
                  background: "transparent",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${t.icon}`}
                  alt=""
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    flexShrink: 0,
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                {t.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          style={{
            maxWidth: 860,
            margin: 0,
            padding: "0 0 2.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: "0.8rem",
            }}
          >
            // projects
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
          >
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          style={{
            maxWidth: 860,
            margin: 0,
            padding: "0 0 2.5rem",
          }}
        >
          <div
            style={{
              border: "1px solid #1a1a1a",
              background: "#0d0d0d",
              maxWidth: 620,
            }}
          >
            <div
              onClick={() => setAboutOpen(!aboutOpen)}
              style={{
                fontSize: "0.95rem",
                letterSpacing: 4,
                color: "#fff",
                borderBottom: aboutOpen ? "1px solid #1a1a1a" : "none",
                padding: "1.2rem 2rem",
                textTransform: "uppercase",
                cursor: "pointer",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ color: "#54C5F8" }}>ISSUE #001</span>{" "}
                <span style={{ color: "#00DC82" }}>&mdash;</span> ORIGIN STORY
              </div>
              <span style={{ fontSize: "1.2rem", color: "#555", transition: "transform 0.2s", transform: aboutOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
                &#9654;
              </span>
            </div>

            {aboutOpen && (
              <div style={{ padding: "1.5rem 2rem 2rem" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#ddd",
                    letterSpacing: 2,
                    marginBottom: "1.5rem",
                  }}
                >
                  by Fawehinmi Erioluwa
                </div>

                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "#fff",
                    lineHeight: 2,
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  <p style={{ margin: "0 0 1.2rem" }}>
                    It started with laziness, honestly.
                  </p>
                  <p style={{ margin: "0 0 1.2rem" }}>
                    I was 14, stuck with a bad PC, and wanted to make Roblox
                    animations &mdash; not because I had some grand vision, but
                    because it seemed easier than actually learning to script. I was
                    skeptical. Why would I write code when I could just drag and
                    drop things around?
                  </p>
                  <p style={{ margin: "0 0 1.2rem" }}>
                    Then someone pointed me toward a bootcamp. HTML. CSS.
                    JavaScript. I went in with zero expectations and came out
                    genuinely surprised &mdash; not because it was easy, but because
                    for the first time something clicked. The web wasn't just
                    something I browsed. It was something I could build.
                  </p>
                  <p style={{ margin: "0 0 1.2rem" }}>
                    But what really hooked me wasn't the syntax or the tutorials. It
                    was the moment I realized I could write something that solved an
                    actual problem. Not a todo app exercise. A real problem &mdash;
                    mine, or someone else's. That's when programming stopped being a
                    skill and started being a tool I actually wanted to carry.
                  </p>
                  <p style={{ margin: "0 0 1.2rem" }}>
                    Three years later, at 17, I'm still building. An offline-first
                    school system for environments where connectivity can't be
                    assumed. A basketball AI that watches film and thinks like an
                    analyst. Small things and large ones. All of it self-taught, all
                    of it solo.
                  </p>
                  <p style={{ margin: 0, color: "#fff" }}>
                    I'm not done. I'm just getting started.
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #1a1a1a",
                    paddingTop: "1rem",
                    marginTop: "1.2rem",
                  }}
                >
              <a
                href="mailto:erioluwafawehinmi@gmail.com"
                style={{
                  fontSize: "1rem",
                  color: "#ccc",
                  textDecoration: "none",
                  letterSpacing: 2,
                  transition: "color 0.18s ease",
                  fontFamily: "'Lora', Georgia, serif",
                }}
              >
                &rarr; erioluwafawehinmi@gmail.com
              </a>
            </div>
          </div>
            )}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          style={{
            padding: "1.2rem 2.5rem",
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              color: "#fff",
              letterSpacing: 2,
            }}
          >
            Fawehinmi Erioluwa &middot; 2026
          </div>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <a
              href="mailto:erioluwafawehinmi@gmail.com"
              className="icon-btn icon-email footer-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background: "#111111",
                border: "1px solid #2a2a2a",
                padding: "0.45rem",
                borderRadius: 2,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <img src="https://cdn.simpleicons.org/gmail/fff" alt="Email" style={{ width: 18, height: 18, display: "block" }} />
            </a>
            <a
              href="https://github.com/erioluwafawehinmi"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn icon-github footer-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background: "#111111",
                border: "1px solid #2a2a2a",
                padding: "0.45rem",
                borderRadius: 2,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <img src="https://cdn.simpleicons.org/github/fff" alt="GitHub" style={{ width: 18, height: 18, display: "block" }} />
            </a>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes swirl {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body { margin: 0; background: #0a0a0a; }
        ::-webkit-scrollbar { width: 4px; background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #1e1e1e; }
        a:hover { color: #54C5F8 !important; }
        button:hover { border-color: #54C5F8 !important; color: #54C5F8 !important; }
        .cta-btn:hover { color: #54C5F8 !important; border-color: #54C5F8 !important; }
        .icon-btn { transition: all 0.18s ease !important; }
        .icon-github:hover { border-color: #c9d1d9 !important; }
        .icon-github:hover img { filter: brightness(1.4); }
        .icon-email:hover { border-color: #EA4335 !important; }
        .icon-email:hover img { filter: brightness(1.4) sepia(1) hue-rotate(-10deg) saturate(5); }
        .icon-instagram:hover { border-color: #E4405F !important; }
        .icon-instagram:hover img { filter: brightness(1.4) sepia(1) hue-rotate(-30deg) saturate(4); }
        .footer-icon { width: auto; height: auto; }
        .project-link-icon:hover { border-color: #54C5F8 !important; background: #54C5F815 !important; }
        .project-link-icon:hover svg { stroke: #54C5F8 !important; }
        .page-content section { animation: fadeIn 0.5s ease both; }
        .tech-chip:hover { border-color: #54C5F8 !important; color: #54C5F8 !important; }
        .nav-link:hover { color: #54C5F8 !important; }
        .project-card:hover { border-color: #54C5F840 !important; }
        .footer-btn:hover { border-color: #54C5F8 !important; color: #54C5F8 !important; }
        .social-icon:hover { border-color: #54C5F8 !important; }
        @media (max-width: 700px) {
          nav { overflow-x: auto; }
          nav::-webkit-scrollbar { height: 2px; }
        }
        @media (max-width: 768px) {
          .page-content { padding-left: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
