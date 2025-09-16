import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const jetbrains = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Youssuf S. - Elite Backend Engineer | Premium Scalable Solutions",
    description:
        "16-year-old backend engineering prodigy from Egypt. Delivering enterprise-grade backends for ambitious startups and SaaS visionaries. Premium quality, lightning-fast delivery, guaranteed results.",
    keywords: [
        "elite backend development",
        "premium database architecture",
        "enterprise API design",
        "luxury SaaS solutions",
        "startup CTO services",
        "Node.js expert",
        "PostgreSQL mastery",
        "scalable systems",
    ],
    metadataBase: new URL("https://youssuf-solo-dev.vercel.app/"),
    openGraph: {
        title: "Youssuf S. - Elite Backend Engineer",
        description:
            "Enterprise-grade backends for ambitious startups. Premium quality, guaranteed results.",
        url: "https://youssuf-solo-dev.vercel.app/",
        siteName: "Youssuf S.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrains.variable} antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
