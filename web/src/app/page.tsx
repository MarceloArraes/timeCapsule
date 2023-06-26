import { cookies } from "next/headers";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SignIn } from "@/components/SignIn";
import { PurpleBlue } from "@/components/PurpleBlue";
import { Stripes } from "@/components/Stripes";
import MemoryDisplay from "@/components/MemoryDisplay";
import { Profile } from "@/components/Profile";

export default function Home() {
  const isAuthenticated = cookies().has("token");
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-starts.svg)]">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        <PurpleBlue />
        <Stripes />
        {isAuthenticated ? <Profile /> : <SignIn />}
        <HeroSection />
        <Footer />
      </div>
      <MemoryDisplay />
    </main>
  );
}
