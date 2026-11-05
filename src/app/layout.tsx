import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AnimatedSiteBackground } from "@/components/AnimatedSiteBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
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
