import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Project } from "@/sanity/lib/sanity";

interface ProjectSectionProps {
  projects: Project[];
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {projects.map((project, i) => (
        <BentoGridItem
          key={project._key}
          title={project.title}
          description={project.description}
          header={<Skeleton />}
          icon={getIcon(i)}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          link={project.link}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "></div>
);

const getIcon = (index: number) => {
  const icons = [
    <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    <IconSignature className="h-4 w-4 text-neutral-500" />,
    <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  ];

  return icons[index % icons.length];
};
