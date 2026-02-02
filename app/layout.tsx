import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Amir | Computer Engineering Portfolio",
  description:
    "Computer Engineering student at Toronto Metropolitan University specializing in software, embedded systems, and hardware design.",
  keywords: [
    "Mohammad Amir",
    "Computer Engineering",
    "Portfolio",
    "Software Engineer",
    "Toronto Metropolitan University",
  ],
  openGraph: {
    title: "Mohammad Amir | Portfolio",
    description:
      "Computer Engineering student specializing in software and embedded systems.",
    url: "https://mohammad-amir.netlify.app",
    siteName: "Mohammad Amir Portfolio",
    type: "website",
  },


icons: {
    icon: "/icon.png", // Assuming you named it icon.png
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png", // Optional: for iPhone home screen bookmarks
  },


  // ✅ Google Search Console verification (HTML TAG METHOD)
  verification: {
    google: "iSNTFqb-8-SRVGxmNULzJ1pbbq25odGagstWO9agBQ8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
