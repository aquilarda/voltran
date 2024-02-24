import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/app/page";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
// import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voltran",
  description:
    "Team Voltran (Teknofest and FLL team(First lego League)) Offical Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Home />
        <Footer />
      </body>
    </html>
  );
}
