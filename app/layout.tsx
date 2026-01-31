import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Amir | Computer Engineer",
  description: "Computer Engineering Student",
  icons: {
    icon: "/favicon.png",
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
