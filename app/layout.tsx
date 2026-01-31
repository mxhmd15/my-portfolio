import "./globals.css";

export default function RootLayout({ children,
}: {
  children: React.ReactNode;
}) {
  return (
 <html lang="en" suppressHydrationWarning><body className="min-h-screen  ">
        {children}
      </body></html>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mohammad Amir | Computer Engineer',
  description: 'Computer Engineering Student',
  // This line adds the logo to the tab
  icons: {
    icon: "/favicon.png"
  },
};