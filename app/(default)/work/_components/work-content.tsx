import { getWork } from "@/sanity/lib/sanity";
import ResumeSection from "./resume-section";
import TechStackSection from "./tech-stack-section";
import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";

export async function WorkContent() {
  const data = await getWork();
  if (!data) {
    return <h2>No work data available.</h2>;
  }

  return (
    <div>
      <HeroSection title={data.mainTitle} description={data.mainTitle} />
      <ResumeSection resumeData={data.resume} />
      <TechStackSection techStackData={data.techStack} />
    </div>
  );
}
