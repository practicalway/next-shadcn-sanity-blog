import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

interface LampSectionProps {
  mainTitle: string;
  mainDescription: string;
}

export default function LampSection({
  mainTitle,
  mainDescription,
}: LampSectionProps) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {mainTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-slate-400 pt-10 hidden sm:block text-lg"
      >
        {mainDescription}
      </motion.p>
    </LampContainer>
  );
}
