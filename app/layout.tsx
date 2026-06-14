import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/lib/data";
import { LanguageProvider } from "@/context/LanguageContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import MouseCrosshairWrapper from "@/components/MouseCrosshairWrapper";
import LoadingScreen from "@/components/LoadingScreen";
import { LoadingProvider } from "@/context/LoadingContext";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: `${content.fr.personalInfo.name} - Portfolio`,
  description: content.fr.personalInfo.profileSummary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // MouseCrosshairWrapper handles mobile detection
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' https://www.googletagmanager.com 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://cdn.jsdelivr.net https://cdn-icons-png.flaticon.com https://avatars.githubusercontent.com https://upload.wikimedia.org https://miro.medium.com https://media.licdn.com",
            "connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
            "font-src 'self' data:",
          ].join("; ")}
        />
      </head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
          });
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','CH','GB'],
          });
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
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
            <CookieBanner />
          </ThemeProvider>
        </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
