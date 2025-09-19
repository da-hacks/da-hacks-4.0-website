import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAHacks 4.0",
  description: "DAHacks 4.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased md:subpixel-antialiased"
      >
        {children}
      </body>
    </html>
  );
}
