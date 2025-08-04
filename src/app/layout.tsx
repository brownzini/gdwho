import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDwho",
  description: "Game project with machine learn model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
