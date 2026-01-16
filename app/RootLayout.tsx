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