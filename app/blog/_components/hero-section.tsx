import Link from "next/link";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-6 relative z-10 w-full text-center">
        <h1 className="mt-10 md:mt-26 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Insights by John Doe 👨‍💻
        </h1>
        <p className="mt-5 font-normal text-base md:text-xl text-neutral-300 max-w-xl mx-auto">
          Dive into John Doe's blog for expert insights into React development.
          Explore tutorials, tips, and personal experiences that illuminate the
          power of React for creating dynamic and efficient web applications.
          Whether you're a beginner or a seasoned developer, there's something
          here for everyone.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
