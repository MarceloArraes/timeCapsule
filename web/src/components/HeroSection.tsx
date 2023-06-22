import Image from "next/image";
import React from "react";
import sunSynthware from "../assets/clipart2580163.png";

export function HeroSection() {
  return (
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
  );
}
