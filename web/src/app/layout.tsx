import "./globals.css";
import React from "react";
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bi-jamjuree",
});

export const metadata = {
  title: "Space time",
  description: "Time capsule with react, nextjs, tailwind and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
