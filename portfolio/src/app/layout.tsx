import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rogya",
  description:
    "I'm Dr. Rogya Abdelrasol, a medical doctor and public health professional currently based in Kampala, Uganda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.className} bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50`}
      >
        {" "}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
