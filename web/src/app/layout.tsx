import "./globals.css";
import React, { ReactNode } from "react";
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Profile } from "@/components/Profile";
import { PurpleBlue } from "@/components/PurpleBlue";
import { SignIn } from "@/components/SignIn";
import { Stripes } from "@/components/Stripes";
import { cookies } from "next/headers";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  const token = cookies().get("token")?.value;
  const isAuthenticated = Boolean(token);

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-starts.svg)]">
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
            <PurpleBlue />
            <Stripes />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <HeroSection />
            <Footer />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
