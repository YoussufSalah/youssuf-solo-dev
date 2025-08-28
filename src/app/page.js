// Data constants extracted for easy editing
const NAVIGATION = {
    logo: "Youssuf S.",
    menuItems: [
        { label: "Home", href: "#home" },
        { label: "What I Do", href: "#services" },
        { label: "Projects", href: "#portfolio" },
        { label: "Why Me", href: "#why-me" },
        { label: "Contact", href: "#contact" },
    ],
    ctaText: "Work With Me",
};

const HERO = {
    badge: "⚡ Backend Dev & Database Systems",
    headlineMain: "Got an Idea? I’ll Build the Backend.",
    subtitle: "Fast. Clean. Ready to Scale.",
    highlight: { first: "Idea", second: "Backend" },
    description:
        "I build backends that don’t crash, don’t crawl, and don’t make your frontend devs cry. Startups, founders, and teams hit me up when they need <strong>production-ready backends</strong> without the headaches. Always on time. Always scalable. If I don’t deliver? You don’t pay. Simple.",
    profile: {
        name: "Youssuf S.",
        title: "Backend Engineer",
        location: "Egypt",
        age: "16 (yeah, that’s not a typo)",
        experience: "Years building systems that <i>actually</i> work",
    },
    buttons: [
        { text: "See My Services", href: "#services", type: "primary" },
        { text: "Hit Me Up", href: "#contact", type: "secondary" },
    ],
};

const SERVICES = {
    sectionLabel: "What I Do",
    title: "Backend Builds That Don’t Suck",
    description:
        "Here’s how I turn your messy idea into a backend that <i>actually works</i>:",
    gigs: [
        {
            id: "gig1",
            emoji: "🗄️",
            title: "Database Design That Doesn’t Haunt You Later",
            price: "$150",
            tagline: "Stop future nightmares before they start",
            problem:
                "Bad database design = slow app, broken analytics, expensive migrations.",
            solution:
                "I’ll design a <strong>clean, scalable schema</strong> that keeps your app fast and your data organized like a pro.",
            deliverables: [
                "Custom DB schema (Postgres/MySQL/Supabase)",
                "Analytical SQL queries (dashboards, insights, reports)",
                "ER diagram + schema docs",
            ],
            timeline: "Under 24h",
        },
        {
            id: "gig2",
            emoji: "🔌",
            title: "APIs That Just Work™",
            price: "$400",
            tagline: "Your frontend team will thank you",
            problem: "Half-baked APIs = bugs, delays, angry devs.",
            solution:
                "I’ll ship you a <strong>clean, secure, documented API</strong> ready to plug into your frontend with zero stress.",
            deliverables: [
                "REST API (Node.js, Express, Supabase)",
                "Auth & permissions (JWT/Passport)",
                "CRUD ops + custom logic",
                "Swagger/OpenAPI docs",
            ],
            timeline: "1–2 days",
        },
        {
            id: "gig3",
            emoji: "🚀",
            title: "Full SaaS MVP Backend",
            price: "$1,200",
            tagline: "From zero to backend in under 2 weeks",
            problem: "Building a SaaS backend from scratch takes forever.",
            solution:
                "I’ll deliver your <strong>entire MVP backend</strong> (DB + API + auth + docs) so you can launch and test fast.",
            deliverables: [
                "Full database schema + implementation",
                "Complete Node.js backend (auth, roles, CRUD)",
                "Production-ready REST API",
                "Docs + Postman/Swagger collection",
            ],
            timeline: "5–10 days",
            featured: true,
        },
    ],
};

const PROJECTS = {
    sectionLabel: "🛠 Projects",
    title: "Stuff I’ve Built",
    description: "Not just theory. Here’s some real backend work I’ve done:",
    items: [
        {
            category: "Database Design",
            name: "Gym Management System",
            description:
                "Schema for managing members, staff, payments, analytics. Clean. Fast. Zero bloat.",
            technologies: ["PostgreSQL", "SQL", "Schema Design"],
            type: "Database Architecture",
            icon: "dumbbell",
        },
        {
            category: "SaaS Backend MVP",
            name: "Stratify API",
            description:
                "Full backend: auth, business logic, APIs, Supabase. Built to scale from day one.",
            technologies: ["Node.js", "Express", "Supabase", "JWT"],
            type: "Complete Backend",
            icon: "layers",
        },
    ],
    cta: { text: "Got an Idea? Let’s Talk", href: "#contact" },
};

const BENEFITS = {
    sectionLabel: "🔥 Why Me",
    title: "What Makes Me Different",
    description:
        "I’m young, hungry, and obsessed with shipping quality code fast. Here’s what you get with me:",
    items: [
        {
            icon: "⚡",
            title: "Ridiculously Fast Delivery",
            description:
                "Your backend gets done before you even expect it. Missed deadlines? Never heard of them.",
        },
        {
            icon: "🏗️",
            title: "Code That Scales",
            description:
                "I don’t hack stuff together. Everything’s clean, modular, and future-proof.",
        },
        {
            icon: "💰",
            title: "Zero-Risk Guarantee",
            description:
                "If I don’t deliver what I promised, you don’t pay. No drama.",
        },
        {
            icon: "💬",
            title: "Straightforward Communication",
            description:
                "You’ll always know what’s going on. No ghosting, no jargon, no BS.",
        },
    ],
};

const STEPS = {
    sectionLabel: "How We’ll Work",
    title: "Simple 4-Step Flow",
    description: "No corporate red tape. Just fast, clear, and effective:",
    items: [
        {
            number: "01",
            title: "You Reach Out",
            description:
                "Shoot me a message with your idea. I reply in hours, not days.",
        },
        {
            number: "02",
            title: "We Lock Scope",
            description:
                "Quick chat or call. We nail down exactly what’s needed. No scope creep, no confusion.",
        },
        {
            number: "03",
            title: "I Build It",
            description:
                "I go heads-down and ship. You get progress updates as I build.",
        },
        {
            number: "04",
            title: "You Get It + Docs",
            description:
                "Backend delivered. Full docs included so your team can run with it instantly.",
        },
    ],
};

const CTA = {
    title: "Need a Backend? I Got You.",
    description:
        "Fast delivery. Scalable code. Money-back guarantee. Let’s get your idea online.",
    panel: {
        title: "Let’s Build",
        description:
            "Email me your project idea. I’ll reply within hours with a plan + timeline.",
        methods: [
            {
                type: "email",
                value: "business.youssuf@gmail.com",
                label: "📩 Email Me",
                href: "mailto:business.youssuf@gmail.com",
                primary: true,
            },
            {
                type: "twitter",
                value: "Youssuf S.",
                label: "🐦 X/Twitter",
                href: "https://x.com/YoussufSoloDev",
                primary: false,
            },
        ],
        responseTime: "I reply within hours",
        guarantee: "If I don’t deliver, you don’t pay.",
    },
};

export default function Home() {
    return (
        <div
            className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]"
            style={{
                background:
                    "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.1) 0%, rgba(15, 23, 42, 0.9) 70%)",
            }}
        >
            <header className="border-b border-[var(--color-border)] bg-[var(--color-surface-glass)] backdrop-blur-[12px] sticky top-0 z-10">
                <div className="container flex items-center justify-between h-16">
                    <div className="font-bold text-lg text-[var(--color-text-accent)]">
                        {NAVIGATION.logo}
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-[var(--color-text-secondary)]">
                        {NAVIGATION.menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="hover:text-[var(--color-primary)] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-white font-semibold"
                        style={{
                            background: "var(--gradient-primary)",
                            boxShadow: "var(--shadow-glow-blue)",
                        }}
                    >
                        {NAVIGATION.ctaText}
                    </a>
                </div>
            </header>

            <main id="home">
                <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center text-sm font-medium text-[var(--color-text-accent)] bg-[var(--color-surface-glass)] backdrop-blur-[8px] px-4 py-2 rounded-full border border-[var(--color-border)]">
                            {HERO.badge}
                        </div>
                        <h1
                            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight"
                            style={{
                                lineHeight: "var(--font-display-line-height)",
                                letterSpacing:
                                    "var(--font-display-letter-spacing)",
                            }}
                        >
                            Got an
                            <span
                                className="text-[var(--color-primary)]"
                                style={{
                                    background: "var(--gradient-primary)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {` ${HERO.highlight.first}`}
                            </span>
                            ? I’ll Build the
                            <span
                                className="text-[var(--color-text-accent)]"
                                style={{
                                    background: "var(--gradient-purple)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {` ${HERO.highlight.second}`}
                            </span>
                            .
                            <div className="mt-3 text-xl text-[var(--color-text-secondary)] tracking-tight">
                                {HERO.subtitle}
                            </div>
                        </h1>
                        <p className="mt-6 text-[var(--color-text-secondary)] max-w-[60ch] text-lg leading-relaxed">
                            I build backends that don’t crash, don’t crawl, and
                            don’t make your frontend devs cry. Startups,
                            founders, and teams hit me up when they need{" "}
                            <strong className="text-[var(--color-text-accent)]">
                                production-ready backends
                            </strong>{" "}
                            without the headaches. Always on time. Always
                            scalable. If I don’t deliver? You don’t pay. Simple.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            {HERO.buttons.map((btn) => (
                                <a
                                    key={btn.text}
                                    href={btn.href}
                                    className={
                                        btn.type === "primary"
                                            ? "inline-flex items-center justify-center h-12 px-8 rounded-lg text-white font-semibold lift-on-hover"
                                            : "inline-flex items-center justify-center h-12 px-8 rounded-lg text-[var(--color-primary)] border-2 border-[var(--color-primary)] font-semibold backdrop-blur-[8px] hover:bg-[var(--color-surface-glass)] transition-all"
                                    }
                                    style={
                                        btn.type === "primary"
                                            ? {
                                                  background:
                                                      "var(--gradient-primary)",
                                                  boxShadow:
                                                      "var(--shadow-glow-blue)",
                                              }
                                            : undefined
                                    }
                                >
                                    {btn.text}
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 text-sm text-[var(--color-text-muted)]">
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-text-accent)]">
                                    {HERO.profile.name}
                                </span>
                                <span>·</span>
                                <span>{HERO.profile.title}</span>
                                <span>·</span>
                                <span>{HERO.profile.location}</span>
                                <span>·</span>
                                <span className="text-[var(--color-primary)]">
                                    {HERO.profile.age}
                                </span>
                            </div>
                            <div
                                className="mt-1"
                                dangerouslySetInnerHTML={{
                                    __html: HERO.profile.experience,
                                }}
                            />
                        </div>
                    </div>
                    <div className="bg-[var(--color-surface)] text-white rounded-xl p-6 md:p-8 shadow-xl border border-[var(--color-border)] lift-on-hover">
                        <pre className="overflow-auto text-sm leading-6 font-mono">
                            {`# DB schema + REST API routes
-- users
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

-- routes
GET  /api/v1/users
POST /api/v1/auth/login
`}
                        </pre>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="container py-16 md:py-24">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                                {SERVICES.sectionLabel}
                            </div>
                            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                                {SERVICES.title}
                            </h2>
                            <p
                                className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]"
                                dangerouslySetInnerHTML={{
                                    __html: SERVICES.description,
                                }}
                            />
                        </div>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {SERVICES.gigs.map((gig) => (
                            <div
                                key={gig.id}
                                className="rounded-xl p-8 lift-on-hover"
                                style={{
                                    background: "var(--gradient-surface)",
                                    boxShadow: "var(--shadow-lg)",
                                    border: "1px solid var(--color-border)",
                                    borderTop:
                                        "3px solid var(--color-accent-gold)",
                                }}
                            >
                                <div className="text-3xl">{gig.emoji}</div>
                                <h3 className="mt-4 text-xl font-bold text-[var(--color-text-primary)]">
                                    {gig.title}
                                </h3>
                                <div className="mt-2 text-sm text-[var(--color-text-muted)]">
                                    {gig.tagline}
                                </div>
                                <div className="mt-4 text-3xl font-extrabold text-[var(--color-text-accent)]">
                                    {gig.price}
                                </div>
                                <p
                                    className="mt-4 text-[var(--color-text-secondary)]"
                                    dangerouslySetInnerHTML={{
                                        __html: gig.solution,
                                    }}
                                />
                                <ul className="mt-6 list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                                    {gig.deliverables.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-sm text-[var(--color-text-muted)]">
                                    Timeline: {gig.timeline}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Portfolio */}
                <section id="portfolio" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        {PROJECTS.sectionLabel}
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        {PROJECTS.title}
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        {PROJECTS.description}
                    </p>
                    <div className="mt-10 grid md:grid-cols-2 gap-8">
                        {PROJECTS.items.map((p, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl p-8 lift-on-hover"
                                style={{
                                    background: "var(--gradient-surface)",
                                    boxShadow: "var(--shadow-lg)",
                                    border: "1px solid var(--color-border)",
                                }}
                            >
                                <div className="text-sm text-[var(--color-text-muted)]">
                                    {p.category}
                                </div>
                                <h3 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                                    {p.name}
                                </h3>
                                <p className="mt-3 text-[var(--color-text-secondary)]">
                                    {p.description}
                                </p>
                                <div className="mt-4 text-sm text-[var(--color-text-muted)]">
                                    Tech: {p.technologies.join(", ")}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <a
                            href={PROJECTS.cta.href}
                            className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-white font-semibold lift-on-hover"
                            style={{
                                background: "var(--gradient-primary)",
                                boxShadow: "var(--shadow-glow-blue)",
                            }}
                        >
                            {PROJECTS.cta.text}
                        </a>
                    </div>
                </section>

                {/* Why Me */}
                <section id="why-me" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        {BENEFITS.sectionLabel}
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        {BENEFITS.title}
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        {BENEFITS.description}
                    </p>
                    <div className="mt-10 grid md:grid-cols-4 gap-6">
                        {BENEFITS.items.map((b, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-6 lift-on-hover"
                                style={{
                                    background: "var(--color-surface-glass)",
                                    backdropFilter: "blur(8px)",
                                    boxShadow: "var(--shadow-md)",
                                    border: "1px solid var(--color-border)",
                                }}
                            >
                                <div className="text-2xl">{b.icon}</div>
                                <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                    {b.title}
                                </h3>
                                <p className="mt-1 text-[var(--color-text-secondary)]">
                                    {b.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                <section id="process" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        {STEPS.sectionLabel}
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        {STEPS.title}
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        {STEPS.description}
                    </p>
                    <div className="mt-10 grid md:grid-cols-2 gap-8">
                        {STEPS.items.map((s, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-8 lift-on-hover"
                                style={{
                                    background: "var(--gradient-surface)",
                                    boxShadow: "var(--shadow-lg)",
                                    border: "1px solid var(--color-border)",
                                }}
                            >
                                <div className="text-sm font-bold text-[var(--color-primary)]">
                                    {s.number}
                                </div>
                                <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                    {s.title}
                                </h3>
                                <p className="mt-2 text-[var(--color-text-secondary)]">
                                    {s.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA + Contact */}
                <section
                    id="contact"
                    className="py-20 md:py-28"
                    style={{ background: "var(--gradient-surface)" }}
                >
                    <div className="container text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold">
                            {CTA.title}
                        </h2>
                        <p className="mt-2 text-white/80 max-w-[70ch]">
                            {CTA.description}
                        </p>
                        <div
                            className="mt-8 grid md:grid-cols-2 gap-8 rounded-xl p-8"
                            style={{
                                background: "var(--color-surface-glass)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-text-accent)]">
                                    {CTA.panel.title}
                                </h3>
                                <p className="mt-3 text-white/80">
                                    {CTA.panel.description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 self-center">
                                {CTA.panel.methods.map((m) => (
                                    <a
                                        key={m.type}
                                        href={m.href}
                                        className={
                                            m.primary
                                                ? "inline-flex items-center justify-center h-12 px-8 rounded-lg text-[var(--color-dark-background)] font-semibold lift-on-hover"
                                                : "inline-flex items-center justify-center h-12 px-8 rounded-lg text-white border-2 border-white/50 font-semibold hover:bg-white/10 transition-all"
                                        }
                                        style={
                                            m.primary
                                                ? {
                                                      background:
                                                          "var(--gradient-gold)",
                                                      boxShadow:
                                                          "var(--shadow-glow-gold)",
                                                  }
                                                : undefined
                                        }
                                    >
                                        {m.label}
                                    </a>
                                ))}
                                <div className="text-sm text-white/70">
                                    {CTA.panel.responseTime} ·{" "}
                                    {CTA.panel.guarantee}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
