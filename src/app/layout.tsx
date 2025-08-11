import type { Metadata } from "next";
import "./globals.css";

import { Exo_2, Inter, Luckiest_Guy, Roboto } from "next/font/google";
import { ScreenProvider } from "@/contexts/screen/ScreenProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["400", "600", "700"],
});

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest",
});

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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${roboto.variable} ${exo2.variable} ${luckiest.variable}`}
    >
      <body>
        <ScreenProvider>{children}</ScreenProvider>
      </body>
    </html>
  );
}
