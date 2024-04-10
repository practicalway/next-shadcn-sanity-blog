"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Highlight, HeroHighlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

function HeroSection({
  title,
  description,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-6 relative z-10 w-full text-center">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Highlight className="text-black dark:text-white">
              {title}
            </Highlight>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="mt-4 text-md px-4 lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            {description}
          </motion.p>

          {buttonText && buttonLink && (
            <div className="mt-10">
              <Link href={buttonLink}>
                <Button>{buttonText}</Button>
              </Link>
            </div>
          )}
        </HeroHighlight>
      </div>
    </div>
  );
}

export default HeroSection;
