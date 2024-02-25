import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/app/page";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import Members from "@/app/members/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voltran",
  description:
    "Team Voltran (Teknofest and FLL (First Lego League) team) Offical Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
