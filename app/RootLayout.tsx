// RootLayout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No classes on <html>
    <html lang="en" suppressHydrationWarning>
      {/* <body> remains empty */}
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mohammad Amir | Portfolio',
  description: 'Computer Engineering Student',
  // This line adds the logo to the tab
  icons: {
    icon: '/me.jpg', // or '/icon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}