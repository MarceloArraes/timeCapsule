import Image from "next/image";
import { User } from "lucide-react";
import sunSynthware from "../assets/clipart2580163.png";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-starts.svg)]">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-80 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-500"
        >
          <div className="h-18 w-18 flex items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className=" max-w-[140px] text-sm leading-snug">
            <span className="underline">Create your account</span> and save your
            memories!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5 ">
          <Image src={sunSynthware} alt="image" width={100} height={100} />
          <div className="max-w-[420px]">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Your Time Capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Track your best moments and share them!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black hover:bg-green-600"
            href="http://"
          >
            RECORD MEMORY
          </a>
        </div>
        {/* foot */}
        <div className="text-sm leading-relaxed text-gray-200">
          <a
            target="_blank"
            rel="nonreferer"
            className="underline hover:text-gray-100"
            href="https://marcelosportfolio.vercel.app/"
          >
            Marcelo&apos;s project{" "}
          </a>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col items-center justify-center  p-16">
        <p className="w-[360px] text-center leading-relaxed">
          You didn&apos;t register any memory. {" \n"}
          <a href="" className="underline hover:text-gray-500">
            create it now
          </a>
        </p>
      </div>
    </main>
  );
}
