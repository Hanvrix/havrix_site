import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StickyNav } from "@/components/HeroNav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import GetQuoteBadge from "@/components/ui/GetQuoteBadge";
import FloatingActions from "@/components/ui/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanvrix.vercel.app"),
  title: "Hanvrix | Best Software Company in Salem & Top IT Solutions Tamil Nadu",
  description: "Hanvrix is the #1 software company in Salem, offering expert IT services, Textile software solutions, and SaaS development in Tamil Nadu. Your top choice for Salem IT services.",
  applicationName: "Hanvrix",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    siteName: "Hanvrix",
    title: "Hanvrix | Best Software Company in Salem & Top IT Solutions Tamil Nadu",
    description: "Hanvrix is the #1 software company in Salem, offering expert IT services, Textile software solutions, and SaaS development in Tamil Nadu.",
    url: "https://hanvrix.vercel.app",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Hanvrix Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanvrix | Best Software Company in Salem",
    description: "Hanvrix is the #1 software company in Salem, offering expert IT services, Textile software solutions, and SaaS development in Tamil Nadu.",
    images: ["/logo.png"],
  },
  verification: {
    google: "kpcpABNaPjW58RcNnWFw9fzJYE5JgIxTX3DHqphVfaI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-brand-secondary overflow-x-hidden`}
      >
        <Script id="schema-website" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hanvrix",
              "alternateName": ["Hanvrix Technologies", "Hanvrix Tech"],
              "url": "https://hanvrix.vercel.app/"
            }
          `}
        </Script>
        <Script id="schema-local-business" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Hanvrix",
              "logo": "https://hanvrix.vercel.app/logo.png",
              "image": "https://hanvrix.vercel.app/logo.png",
              "@id": "https://hanvrix.vercel.app",
              "url": "https://hanvrix.vercel.app",
              "telephone": "+91-8838213390",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Salem",
                "addressLocality": "Salem",
                "addressRegion": "TN",
                "postalCode": "636001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.6643,
                "longitude": 78.1460
              },
              "description": "Best Software Company in Salem & Top IT Solutions in Tamil Nadu specializing in Textile Software and SaaS.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            }
          `}
        </Script>
        <StickyNav />
        <main className="min-h-[100dvh]">
          {children}
        </main>
        <GetQuoteBadge />
        <FloatingActions />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
