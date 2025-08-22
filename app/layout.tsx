import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excalitech - Software Development Agency",
  description: "Excalitech is a modern software development agency specializing in user-centric design, tech-driven solutions, and collaborative project delivery.",
  keywords: [
    "software development",
    "web development",
    "UI/UX design",
    "Next.js",
    "React",
    "agency",
    "digital products",
    "custom software"
  ],
  openGraph: {
    title: "Excalitech - Software Development Agency",
    description: "User-centric design, tech-driven solutions, and collaborative project delivery.",
    url: "https://excalitech.com/",
    siteName: "Excalitech",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Excalitech Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Excalitech - Software Development Agency",
    description: "User-centric design, tech-driven solutions, and collaborative project delivery.",
    images: ["/globe.svg"]
  },
  alternates: {
    canonical: "https://excalitech.com/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://excalitech.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
