import "./globals.css";
import type { Metadata } from "next";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Amir | Computer Engineering Portfolio",
  description:
    "Computer Engineering student at Toronto Metropolitan University specializing in software, embedded systems, and hardware design.",
  keywords: [
    "Mohammad Amir",
    "Computer Engineering",
    "Portfolio",
    "Mohammad Amir Mohammad Nuri",
    "Software Engineer",
    "Toronto Metropolitan University",
  ],
  openGraph: {
    title: "Mohammad Amir | Portfolio",
    description:
      "Computer Engineering student specializing in software and embedded systems.",
    url: "https://mohammad-amir.netlify.app",
    siteName: "Mohammad Amir Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Amir Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
