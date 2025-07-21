import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phrimpacthub",
  description:
    "Public Health Research & Impact Hub is a female-led initiative designed to bridge the gap between academic knowledge and practical health solutions across Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.className} `}>
        {" "}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
