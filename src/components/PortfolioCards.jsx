"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

function useTypewriter({ text, durationMs, loop }) {
    const [display, setDisplay] = useState("");
    const [done, setDone] = useState(false);
    const indexRef = useRef(0);

    // Cap speed per char: at least 10ms, at most 50ms per char
    const speed = useMemo(() => {
        if (!text?.length) return 0;
        const raw = durationMs / text.length;
        return Math.min(Math.max(raw, 10), 50);
    }, [text, durationMs]);

    useEffect(() => {
        setDisplay("");
        setDone(false);
        indexRef.current = 0;
        if (!text) return;
        const interval = setInterval(() => {
            if (indexRef.current >= text.length) {
                setDone(true);
                clearInterval(interval);
                return;
            }
            setDisplay((prev) => prev + text[indexRef.current]);
            indexRef.current += 1;
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed, loop]);

    return { display, done };
}

function AnimatedReqRes({ pair, behavior }) {
    const duration = behavior?.duration || "3000";
    const durationMs = useMemo(() => {
        if (typeof duration === "number") return duration;
        if (typeof duration === "string" && duration.endsWith("ms"))
            return parseInt(duration);
        if (typeof duration === "string" && duration.endsWith("s"))
            return Math.round(parseFloat(duration) * 1000);
        return 3000;
    }, [duration]);

    const parseJsonSafe = (value) => {
        try {
            if (typeof value === "string") return JSON.parse(value);
            if (typeof value === "object" && value !== null) return value;
            return null;
        } catch {
            return null;
        }
    };
    const pretty = (value) => JSON.stringify(value, null, 2);

    const reqJson = parseJsonSafe(pair?.req?.body);
    const resJson = parseJsonSafe(pair?.res?.data);

    const requestContent = reqJson
        ? pretty(reqJson)
        : pair?.req?.body?.toString?.() || "";
    const responseContent = resJson
        ? pretty(resJson)
        : pair?.res?.body?.toString?.() || "";

    const { display: reqDisplay, done: reqDone } = useTypewriter({
        text: reqJson ? requestContent : "",
        durationMs,
        loop: false,
    });
    const { display: resDisplay, done: resDone } = useTypewriter({
        text: resJson ? responseContent : "",
        durationMs,
        loop: false,
    });

    return (
        <div className="grid grid-cols-1 gap-4">
            {/* Request Box */}
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-glass)] p-4">
                <div className="text-xs text-[var(--color-text-muted)] flex items-center justify-between gap-2">
                    <span className="shrink-0">
                        {pair?.req?.file || "request.json"}
                    </span>
                    <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[var(--color-text-accent)] font-semibold shrink-0">
                            {pair?.req?.method || "GET"}
                        </span>
                        <span
                            className="text-[var(--color-text-secondary)] w-56 md:w-72 overflow-hidden text-ellipsis whitespace-nowrap"
                            title={pair?.req?.url || pair?.req?.endpoint || ""}
                        >
                            {pair?.req?.url || pair?.req?.endpoint || ""}
                        </span>
                        <button
                            type="button"
                            className="ml-1 px-2 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors"
                            aria-label="Copy endpoint"
                            onClick={() => {
                                const value =
                                    pair?.req?.url || pair?.req?.endpoint || "";
                                if (!value) return;
                                navigator.clipboard
                                    ?.writeText(value)
                                    .catch(() => {});
                            }}
                        >
                            Copy
                        </button>
                    </div>
                </div>
                <pre className="mt-2 text-xs md:text-sm text-[var(--color-text-secondary)] overflow-auto h-24 md:h-32">
                    {reqJson ? reqDisplay || requestContent : requestContent}
                </pre>
            </div>

            {/* Response Box */}
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-glass)] p-4">
                <div className="text-xs text-[var(--color-text-muted)] flex items-center justify-between">
                    <span>{pair?.res?.file || "response.json"}</span>
                    <span className="text-[var(--color-primary)]">
                        {pair?.res?.status || "200 OK"}
                    </span>
                </div>
                <pre className="mt-2 text-xs md:text-sm text-[var(--color-text-secondary)] overflow-auto h-24 md:h-32">
                    {resJson ? resDisplay || responseContent : responseContent}
                </pre>
            </div>
        </div>
    );
}

function RotatingReqRes({ reqRes = [], behavior }) {
    const {
        switchInterval = "3000",
        cycle = true,
        parallelLayout = true,
    } = behavior || {};
    const switchMs = useMemo(() => {
        if (typeof switchInterval === "number") return switchInterval;
        if (typeof switchInterval === "string" && switchInterval.endsWith("ms"))
            return parseInt(switchInterval);
        if (typeof switchInterval === "string" && switchInterval.endsWith("s"))
            return Math.round(parseFloat(switchInterval) * 1000);
        return 3000;
    }, [switchInterval]);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reqRes.length <= 1) return;
        const id = setInterval(() => {
            setIndex((prev) => {
                const next = prev + 1;
                if (next >= reqRes.length) return cycle ? 0 : prev;
                return next;
            });
        }, switchMs);
        return () => clearInterval(id);
    }, [reqRes.length, switchMs, cycle]);

    const current = reqRes[Math.min(index, reqRes.length - 1)] || null;
    if (!current) return null;

    return (
        <div className={parallelLayout ? "" : ""}>
            {/* Force reset on reroll */}
            <AnimatedReqRes key={index} pair={current} behavior={behavior} />
        </div>
    );
}

export default function PortfolioCards({ config }) {
    const section = config?.section || "portfolio";
    const description = config?.description || "";
    const projects = config?.data?.projects || [];
    const behavior = config?.behavior?.reqResAnimation || {};

    return (
        <section id={section} className="container py-16 md:py-24">
            <div className="text-sm font-semibold text-[var(--color-text-accent)]">
                🛠 Projects
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                Stuff I’ve Built
            </h2>
            {description ? (
                <p className="mt-2 text-[var(--color-text-secondary)] max-w-[70ch]">
                    {description}
                </p>
            ) : null}
            {projects.length === 0 ? (
                <div className="mt-8 text-[var(--color-text-muted)]">
                    No projects yet. Add some to showcase your work.
                </div>
            ) : (
                <div className="mt-10 grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl p-6 lift-on-hover"
                            style={{
                                background: "var(--gradient-surface)",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            <div className="space-y-4">
                                {Array.isArray(project.reqRes) &&
                                project.reqRes.length > 0 ? (
                                    <RotatingReqRes
                                        reqRes={project.reqRes}
                                        behavior={behavior}
                                    />
                                ) : null}
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                                        {project.title}
                                    </h3>
                                    {project.description ? (
                                        <p className="mt-2 text-[var(--color-text-secondary)]">
                                            {project.description}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex items-center gap-3">
                                    {project.githubCasestudyURL ? (
                                        <a
                                            href={project.githubCasestudyURL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-[var(--color-primary)] hover:underline"
                                        >
                                            GitHub Case Study →
                                        </a>
                                    ) : null}
                                    {project.XCasestudyURL ? (
                                        <a
                                            href={project.XCasestudyURL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-[var(--color-text-accent)] hover:underline"
                                        >
                                            X Case Study →
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
