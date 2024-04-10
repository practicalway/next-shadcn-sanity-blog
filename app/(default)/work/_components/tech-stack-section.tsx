import Image from "next/image";
import { motion } from "framer-motion";
import { TechStack } from "@/sanity/lib/sanity";
import { Progress } from "@/components/ui/progress";
import { Meteors } from "@/components/ui/meteors";
import { urlForImage } from "@/sanity/lib/image";

interface TechStackProps {
  techStackData: TechStack[];
}

export default function TechStackSection({ techStackData }: TechStackProps) {
  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20 ">
          <div className="max-w-3xl pb-12 mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 py-4 text-center text-4xl font-medium tracking-tight md:text-7xl"
            >
              Tech Stack ❤️
            </motion.h2>
            <motion.p
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-center pt-10 hidden sm:block text-lg"
            >
              Embracing lifelong learning, evolving endlessly in the tech
              landscape.{" "}
            </motion.p>
          </div>
          <div className="relative grid max-w-xs grid-cols-2 gap-6 mx-auto mt-10 sm:max-w-md md:max-w-6xl sm:grid-cols-3 md:grid-cols-6 md:mt-20">
            {techStackData.map((item, index) => (
              <div className="">
                <div className=" w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <Image
                        src={urlForImage(item.image)}
                        width={75}
                        height={75}
                        alt={item.language}
                      />
                    </div>
                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      <p>{item.language}</p>
                    </h1>
                    <Progress value={item.proficiency} />
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
