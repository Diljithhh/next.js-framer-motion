import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import './globals.css'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diljith — Full Stack & Flutter Developer",
  description: "Portfolio of Diljith, full-stack and Flutter developer specializing in mobile apps, AI tools, and digital products.",
  keywords: ["Diljith", "Flutter Developer", "Full Stack Developer", "Portfolio", "AI Tools", "Vercel"],
  verification: {
    google: "BzTzpm3G00G8eFY34qGH8WbFb4reMfLNt0e1VpyMqek",
  },
  openGraph: {
    title: "Diljith — Developer Portfolio",
    description: "Portfolio of Diljith, full-stack and Flutter developer specializing in mobile apps, AI tools, and digital products.",
    type: "website",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Diljith — Developer Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Diljith",
    "url": "https://diljithh.vercel.app",
    "jobTitle": "Full Stack Developer",
    "description": "Flutter and Python developer creating AI-integrated apps and automation tools.",
    "sameAs": [
      "https://github.com/Diljithhh",
      "https://www.linkedin.com/in/diljith-v-d-03a058238/",
      "https://medium.com/@DILJITH_77"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
