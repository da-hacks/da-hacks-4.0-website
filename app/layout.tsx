import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAHacks 4.0",
  description: "Join the biggest collegiate hackathon in Cupertino and turn your vision into reality.",
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
