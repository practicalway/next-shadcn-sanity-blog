import { getWork, Project } from "@/sanity/lib/sanity";
import LampSection from "./lamp-section";
import ResumeSection from "./resume-section";
import TechStackSection from "./tech-stack-section";
import { Separator } from "@/components/ui/separator";
import { ProjectSection } from "./project-section";

export async function WorkContent() {
  const data = await getWork();
  console.log(data);
  if (!data) {
    return <h2>No work data available.</h2>;
  }

  return (
    <div>
      <LampSection
        mainTitle={data.mainTitle}
        mainDescription={data.mainDescription}
      />
      <ResumeSection resumeData={data.resume} />
      <Separator />
      <TechStackSection techStackData={data.techStack} />
      <Separator />
      <ProjectSection projects={data.projects} />
    </div>
  );
}
