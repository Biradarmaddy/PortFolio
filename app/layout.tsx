import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Responsive from "./components/Navigations/Responsive";
import Projects from "./projects/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortFolio Web",
  description: "Personal portfolio website to showcase my skills and experinces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Responsive />
        {children}
        </body>
    </html>
  );
}
