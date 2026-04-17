import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanvrix | Best Software Company in Salem & Top IT Solutions Tamil Nadu",
  description: "Hanvrix is the #1 software company in Salem, offering expert IT services, Textile software solutions, and SaaS development in Tamil Nadu. Your top choice for Salem IT services.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Script id="schema-local-business" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Hanvrix",
              "image": "https://hanvrix.vercel.app/logo.png",
              "@id": "https://hanvrix.vercel.app",
              "url": "https://hanvrix.vercel.app",
              "telephone": "+91-XXXXXXXXXX",
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
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
