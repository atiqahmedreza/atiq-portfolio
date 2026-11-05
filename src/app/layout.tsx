import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatedSiteBackground } from "@/components/AnimatedSiteBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";

/*
 * Self-hosted rather than next/font/google: the Google loader fetches font CSS
 * at build time, and CI runners get rate-limited by Google, which failed the
 * build. These are the same latin-subset variable files Google serves, so the
 * rendering is identical — the build just no longer needs the network.
 * Weight ranges below are the fonts' real fvar axes.
 */
const plusJakarta = localFont({
  src: "./fonts/plus-jakarta-sans-variable.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-mono-variable.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#100c0a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f1ec" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Atiq Ahmed Reza",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Bangladesh",
    "Rajshahi",
    "Varendra University",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "profile",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${siteConfig.name} — Full Stack Web Developer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="relative min-h-screen antialiased">
        {/* Reveal animations start at opacity 0 and are un-hidden by an
            IntersectionObserver. Without JS there is no observer, so make the
            content unconditionally visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-on-primary"
          >
            Skip to content
          </a>
          <AnimatedSiteBackground />
          <div className="relative z-0 flex min-h-screen flex-col">
            <Navbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
