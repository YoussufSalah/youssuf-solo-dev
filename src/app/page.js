import PortfolioCards from "../components/PortfolioCards";

import HERO from "../data/hero.json";
import SERVICES from "../data/services.json";
import NAVIGATION from "../data/navigation.json";
import BENEFITS from "../data/benefits.json";
import STEPS from "../data/steps.json";
import CTA from "../data/cta.json";
import PORTFOLIO_CONFIG from "../data/portfolio.config.json";

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
                <PortfolioCards config={PORTFOLIO_CONFIG} />

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
                                                          "var(--gradient-purple)",
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
