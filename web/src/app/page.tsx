import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SignIn } from "@/components/SignIn";
import { PurpleBlue } from "@/components/PurpleBlue";
import { Stripes } from "@/components/Stripes";
import MemoryDisplay from "@/components/MemoryDisplay";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-starts.svg)]">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        <PurpleBlue />
        <Stripes />
        <SignIn />
        <HeroSection />
        <Footer />
      </div>
      <MemoryDisplay />
    </main>
  );
}
