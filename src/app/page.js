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
                        Youssuf S.
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-[var(--color-text-secondary)]">
                        <a
                            href="#home"
                            className="hover:text-[var(--color-primary)] transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className="hover:text-[var(--color-primary)] transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#portfolio"
                            className="hover:text-[var(--color-primary)] transition-colors"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#why-me"
                            className="hover:text-[var(--color-primary)] transition-colors"
                        >
                            Why Me
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-[var(--color-primary)] transition-colors"
                        >
                            Contact
                        </a>
                    </nav>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-white font-semibold"
                        style={{
                            background: "var(--gradient-primary)",
                            boxShadow: "var(--shadow-glow-blue)",
                        }}
                    >
                        Get Started
                    </a>
                </div>
            </header>

            <main id="home">
                <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center text-sm font-medium text-[var(--color-text-accent)] bg-[var(--color-surface-glass)] backdrop-blur-[8px] px-4 py-2 rounded-full border border-[var(--color-border)]">
                            🚀 Elite Backend & Database Development Services
                        </div>
                        <h1
                            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight"
                            style={{
                                lineHeight: "var(--font-display-line-height)",
                                letterSpacing:
                                    "var(--font-display-letter-spacing)",
                            }}
                        >
                            Turn Your{" "}
                            <span
                                className="text-[var(--color-primary)]"
                                style={{
                                    background: "var(--gradient-primary)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Product Ideas
                            </span>{" "}
                            Into{" "}
                            <span
                                className="text-[var(--color-text-accent)]"
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Reality
                            </span>
                        </h1>
                        <p className="mt-6 text-[var(--color-text-secondary)] max-w-[60ch] text-lg leading-relaxed">
                            I help ambitious founders, startups, and enterprises
                            build{" "}
                            <strong className="text-[var(--color-text-accent)]">
                                enterprise-grade backend systems
                            </strong>{" "}
                            that scale. With years of elite backend development
                            experience, I deliver{" "}
                            <strong className="text-[var(--color-primary)]">
                                premium quality, lightning-fast, and
                                future-proof solutions.
                            </strong>{" "}
                            Always before deadline, or your money back.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-white font-semibold lift-on-hover"
                                style={{
                                    background: "var(--gradient-primary)",
                                    boxShadow: "var(--shadow-glow-blue)",
                                }}
                            >
                                View My Services
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-[var(--color-primary)] border-2 border-[var(--color-primary)] font-semibold backdrop-blur-[8px] hover:bg-[var(--color-surface-glass)] transition-all"
                            >
                                Contact Me
                            </a>
                        </div>
                        <div className="mt-8 text-sm text-[var(--color-text-muted)]">
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-text-accent)]">
                                    Youssuf S.
                                </span>
                                <span>·</span>
                                <span>Elite Backend Engineer</span>
                                <span>·</span>
                                <span>Egypt</span>
                                <span>·</span>
                                <span className="text-[var(--color-primary)]">
                                    16 years old
                                </span>
                            </div>
                            <div className="mt-1">
                                Years of enterprise backend systems experience
                            </div>
                        </div>
                    </div>
                    <div className="bg-[var(--color-surface)] text-white rounded-xl p-6 md:p-8 shadow-xl border border-[var(--color-border)] lift-on-hover">
                        <pre className="overflow-auto text-sm leading-6 font-mono">
                            {`# Elite Database: PostgreSQL
-- Premium users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enterprise API endpoint
GET /api/v1/users
200 OK -> [{ id, email, role, created_at }]

-- Premium authentication
POST /api/v1/auth/login
200 OK -> { token, user, expires_in }`}
                        </pre>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="container py-16 md:py-24">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                                Elite Services
                            </div>
                            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                                Premium Backend Solutions That Scale
                            </h2>
                            <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                                Three elite services to transform your product
                                from vision to enterprise-grade backend reality.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {/* Gig 1 */}
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                                borderTop: "3px solid var(--color-accent-gold)",
                            }}
                        >
                            <div className="text-3xl">⚡</div>
                            <h3 className="mt-4 text-xl font-bold text-[var(--color-text-primary)]">
                                Elite Database Architecture
                            </h3>
                            <div className="mt-2 text-sm text-[var(--color-text-muted)]">
                                For enterprises tired of data chaos that
                                cripples growth
                            </div>
                            <div className="mt-4 text-3xl font-extrabold text-[var(--color-text-accent)]">
                                $150
                            </div>
                            <p className="mt-4 text-[var(--color-text-secondary)]">
                                Poor database design = endless enterprise
                                headaches. I architect{" "}
                                <strong className="text-[var(--color-text-accent)]">
                                    future-proof, normalized, and infinitely
                                    scalable databases
                                </strong>{" "}
                                that keep your enterprise fast and analytics
                                razor-sharp.
                            </p>
                            <ul className="mt-6 list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                                <li>
                                    Enterprise-grade relational database schema
                                    (PostgreSQL/MySQL)
                                </li>
                                <li>
                                    Advanced analytical SQL queries for
                                    executive dashboards
                                </li>
                                <li>
                                    Complete ER diagram + comprehensive
                                    documentation
                                </li>
                            </ul>
                            <div className="mt-6 text-sm text-[var(--color-text-muted)]">
                                Timeline: &lt; 24h
                            </div>
                        </div>

                        {/* Gig 2 */}
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                                borderTop: "3px solid var(--color-accent-gold)",
                            }}
                        >
                            <div className="text-3xl">⚡</div>
                            <h3 className="mt-4 text-xl font-bold text-[var(--color-text-primary)]">
                                Enterprise REST API
                            </h3>
                            <div className="mt-2 text-sm text-[var(--color-text-muted)]">
                                For visionaries who demand a backend that
                                performs flawlessly
                            </div>
                            <div className="mt-4 text-3xl font-extrabold text-[var(--color-text-accent)]">
                                $400
                            </div>
                            <p className="mt-4 text-[var(--color-text-secondary)]">
                                Stop settling for mediocre APIs. I'll craft you
                                a{" "}
                                <strong className="text-[var(--color-primary)]">
                                    bulletproof, documented, and
                                    enterprise-secure API
                                </strong>{" "}
                                that your frontend integrates with seamlessly.
                            </p>
                            <ul className="mt-6 list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                                <li>
                                    Enterprise REST API built with Node.js,
                                    Express & PostgreSQL
                                </li>
                                <li>
                                    Military-grade authentication &
                                    authorization (JWT/Passport)
                                </li>
                                <li>
                                    CRUD operations + complex business logic
                                </li>
                                <li>
                                    Comprehensive Swagger/OpenAPI documentation
                                </li>
                            </ul>
                            <div className="mt-6 text-sm text-[var(--color-text-muted)]">
                                Timeline: 1–2 days
                            </div>
                        </div>

                        {/* Gig 3 */}
                        <div
                            className="rounded-xl p-8 lift-on-hover ring-2"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-xl)",
                                border: "1px solid var(--color-border)",
                                borderTop: "3px solid var(--color-accent-gold)",
                                ringColor: "var(--color-accent-gold)",
                            }}
                        >
                            <div className="text-3xl">⚡</div>
                            <h3 className="mt-4 text-xl font-bold text-[var(--color-text-primary)]">
                                SaaS MVP Backend (Complete)
                            </h3>
                            <div className="mt-2 text-sm text-[var(--color-text-muted)]">
                                For visionaries ready to launch a world-class
                                product, fast
                            </div>
                            <div className="mt-4 text-3xl font-extrabold text-[var(--color-text-accent)]">
                                $1,200
                            </div>
                            <p className="mt-4 text-[var(--color-text-secondary)]">
                                I'll deliver a complete enterprise backend for
                                your MVP so you can{" "}
                                <strong className="text-[var(--color-text-accent)]">
                                    launch in weeks, not months.
                                </strong>{" "}
                                From database to APIs, everything is
                                enterprise-grade and ready for global scale.
                            </p>
                            <ul className="mt-6 list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                                <li>
                                    Enterprise database schema & implementation
                                    (PostgreSQL)
                                </li>
                                <li>
                                    Complete backend (Node.js, Express) with
                                    enterprise auth
                                </li>
                                <li>
                                    REST API with CRUD, business logic, error
                                    handling
                                </li>
                                <li>
                                    Comprehensive documentation +
                                    Postman/Swagger
                                </li>
                            </ul>
                            <div className="mt-6 text-sm text-[var(--color-text-muted)]">
                                Timeline: 5–10 days
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio */}
                <section id="portfolio" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        🛠 Elite Portfolio
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        Premium Work Showcase
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        Here's a glimpse of my elite work - enterprise projects
                        that demonstrate world-class backend expertise.
                    </p>
                    <div className="mt-10 grid md:grid-cols-2 gap-8">
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-sm text-[var(--color-text-muted)]">
                                Enterprise Database Architecture
                            </div>
                            <h3 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                                Gym Management System
                            </h3>
                            <p className="mt-3 text-[var(--color-text-secondary)]">
                                Complete enterprise database architecture for
                                gym operations, member management, and executive
                                analytics.
                            </p>
                            <div className="mt-4 text-sm text-[var(--color-text-muted)]">
                                Tech: PostgreSQL, SQL, Enterprise Database
                                Design
                            </div>
                        </div>
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-sm text-[var(--color-text-muted)]">
                                SaaS Backend MVP
                            </div>
                            <h3 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                                Stratify API
                            </h3>
                            <p className="mt-3 text-[var(--color-text-secondary)]">
                                Full-stack enterprise backend API for a SaaS
                                platform with military-grade authentication,
                                business logic, and scalable architecture.
                            </p>
                            <div className="mt-4 text-sm text-[var(--color-text-muted)]">
                                Tech: Node.js, Express, PostgreSQL, JWT
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-white font-semibold lift-on-hover"
                            style={{
                                background: "var(--gradient-primary)",
                                boxShadow: "var(--shadow-glow-blue)",
                            }}
                        >
                            Discuss Your Project
                        </a>
                    </div>
                </section>

                {/* Why Me */}
                <section id="why-me" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        🔑 Why Choose Elite Excellence
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        What Sets Me Apart
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        Young, hungry, and laser-focused on delivering premium
                        results that exceed enterprise expectations.
                    </p>
                    <div className="mt-10 grid md:grid-cols-4 gap-6">
                        <div
                            className="rounded-xl p-6 lift-on-hover"
                            style={{
                                background: "var(--color-surface-glass)",
                                backdropFilter: "blur(8px)",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-2xl">⚡</div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                Lightning-Fast Delivery
                            </h3>
                            <p className="mt-1 text-[var(--color-text-secondary)]">
                                On time, every time - or you don't pay.
                            </p>
                        </div>
                        <div
                            className="rounded-xl p-6 lift-on-hover"
                            style={{
                                background: "var(--color-surface-glass)",
                                backdropFilter: "blur(8px)",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-2xl">🏗️</div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                Enterprise-Grade Code
                            </h3>
                            <p className="mt-1 text-[var(--color-text-secondary)]">
                                Built like Fortune 500 software; ready for
                                global scale.
                            </p>
                        </div>
                        <div
                            className="rounded-xl p-6 lift-on-hover"
                            style={{
                                background: "var(--color-surface-glass)",
                                backdropFilter: "blur(8px)",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-2xl">💰</div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                Premium Guarantee
                            </h3>
                            <p className="mt-1 text-[var(--color-text-secondary)]">
                                If I don't deliver excellence, you don't pay.
                            </p>
                        </div>
                        <div
                            className="rounded-xl p-6 lift-on-hover"
                            style={{
                                background: "var(--color-surface-glass)",
                                backdropFilter: "blur(8px)",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-2xl">💬</div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                Executive Communication
                            </h3>
                            <p className="mt-1 text-[var(--color-text-secondary)]">
                                You'll always know exactly where your project
                                stands.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="process" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        Elite Process
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        Premium 4-Step Process
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        From first contact to delivered enterprise backend -
                        streamlined for excellence and clarity.
                    </p>
                    <div className="mt-10 grid md:grid-cols-2 gap-8">
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-sm font-bold text-[var(--color-primary)]">
                                01
                            </div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                You Contact Me
                            </h3>
                            <p className="mt-2 text-[var(--color-text-secondary)]">
                                Reach out with your project vision. I'll respond
                                within hours with strategic questions and a
                                premium timeline.
                            </p>
                        </div>
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-sm font-bold text-[var(--color-primary)]">
                                02
                            </div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                We Define Requirements
                            </h3>
                            <p className="mt-2 text-[var(--color-text-secondary)]">
                                Strategic call to nail down exactly what you
                                need. No confusion, no scope creep, only
                                excellence.
                            </p>
                        </div>
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-sm font-bold text-[var(--color-primary)]">
                                03
                            </div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                I Build Your Backend
                            </h3>
                            <p className="mt-2 text-[var(--color-text-secondary)]">
                                Lightning-fast, focused development with daily
                                executive updates. You'll see premium progress
                                every day.
                            </p>
                        </div>
                        <div
                            className="rounded-xl p-8 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="text-sm font-bold text-[var(--color-primary)]">
                                04
                            </div>
                            <h3 className="mt-2 font-bold text-[var(--color-text-primary)]">
                                Delivery & Documentation
                            </h3>
                            <p className="mt-2 text-[var(--color-text-secondary)]">
                                Complete enterprise backend delivered with
                                comprehensive documentation and seamless
                                handoff.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="container py-16 md:py-24">
                    <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                        Elite Client Testimonials
                    </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                        Premium Results That Speak
                    </h2>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                        Real feedback from enterprise founders and teams who
                        trusted me with their backend vision.
                    </p>
                    <div className="mt-10 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "Youssuf delivered exactly what we needed in record time. Our database design is enterprise-grade and our API is lightning-fast.",
                                author: "Enterprise Founder",
                                role: "SaaS Visionary",
                                rating: 5,
                            },
                            {
                                text: "Exceptional communication and even better results. He's young but his code quality is Fortune 500-level.",
                                author: "Technical Co-founder",
                                role: "Enterprise Tech Lead",
                                rating: 5,
                            },
                            {
                                text: "Finally, a backend developer who actually respects deadlines. Would hire again in a heartbeat.",
                                author: "Product Manager",
                                role: "Startup Team",
                                rating: 5,
                            },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-8 lift-on-hover"
                                style={{
                                    background: "var(--gradient-surface)",
                                    boxShadow: "var(--shadow-lg)",
                                    border: "1px solid var(--color-border)",
                                }}
                            >
                                <div className="flex items-center gap-1 text-[var(--color-accent-gold)]">
                                    {Array.from({ length: t.rating }).map(
                                        (_, idx) => (
                                            <span key={idx}>★</span>
                                        )
                                    )}
                                </div>
                                <p className="mt-3 text-[var(--color-text-secondary)]">
                                    {t.text}
                                </p>
                                <div className="mt-4 font-semibold text-[var(--color-text-primary)]">
                                    {t.author}
                                </div>
                                <div className="text-sm text-[var(--color-text-muted)]">
                                    {t.role}
                                </div>
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
                            Ready to Build Your Elite Backend?
                        </h2>
                        <p className="mt-2 text-white/80 max-w-[70ch]">
                            Let's transform your vision into an enterprise-grade
                            backend system. Premium delivery, guaranteed
                            excellence.
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
                                    Get Started Today
                                </h3>
                                <p className="mt-3 text-white/80">
                                    Email me with your project vision and I'll
                                    get back to you within hours with a premium
                                    timeline and strategic next steps.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 self-center">
                                <a
                                    href="mailto:business.youssuf@gmail.com"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-[var(--color-dark-background)] font-semibold lift-on-hover"
                                    style={{
                                        background: "var(--gradient-gold)",
                                        boxShadow: "var(--shadow-glow-gold)",
                                    }}
                                >
                                    📩 Email Me
                                </a>
                                <a
                                    href="https://x.com/YoussufSoloDev"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-white border-2 border-white/50 font-semibold hover:bg-white/10 transition-all"
                                >
                                    🐦 X/Twitter
                                </a>
                                <div className="text-sm text-white/70">
                                    Response within hours · Premium guarantee if
                                    not satisfied
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
