import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import MouseCrosshairWrapper from "@/components/MouseCrosshairWrapper";
import LoadingScreen from "@/components/LoadingScreen";
import { LoadingProvider } from "@/context/LoadingContext";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://saadbadrane.github.io/portfolio";

// Google Analytics : uniquement si l'ID est fourni au build (secret GitHub).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Metadata — titre et description propres, sous 160 caractères
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Saad Badrane — Ingénieur IA & Computer Vision",
  description:
    "Ingénieur IA & Computer Vision, diplômé Télécom Saint-Étienne (IMT). LLM, vision par ordinateur et MLOps. Disponible en CDI · Mobilité France entière.",
  keywords: [
    "Ingénieur IA",
    "Computer Vision",
    "MLOps",
    "Machine Learning",
    "LLM",
    "RAG",
    "Saad Badrane",
  ],
  authors: [{ name: "Saad Badrane" }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      fr: SITE_URL,
      en: SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Saad Badrane — Portfolio",
    title: "Saad Badrane — Ingénieur IA & Computer Vision",
    description:
      "LLM, vision par ordinateur et MLOps. Diplômé Télécom Saint-Étienne (IMT). Disponible en CDI · Mobilité France entière.",
    locale: "fr_FR",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saad Badrane — Ingénieur IA & Computer Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Badrane — Ingénieur IA & Computer Vision",
    description:
      "LLM, vision par ordinateur et MLOps. Diplômé Télécom Saint-Étienne (IMT). Disponible en CDI · Mobilité France entière.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' https://www.googletagmanager.com 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://cdn.simpleicons.org https://cdn.jsdelivr.net https://cdn-icons-png.flaticon.com https://avatars.githubusercontent.com https://upload.wikimedia.org https://miro.medium.com https://media.licdn.com",
            "connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
            "font-src 'self' data:",
          ].join("; ")}
        />
        <link rel="alternate" hrefLang="fr" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <LoadingScreen />
          <AnimatedBackground />
          <MouseCrosshairWrapper />
          <LanguageProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
              {GA_ID && <CookieBanner gaId={GA_ID} />}
            </ThemeProvider>
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
