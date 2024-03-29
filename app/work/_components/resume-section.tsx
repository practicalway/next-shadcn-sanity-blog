import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "@/app/blog/_components/pt-components";
import { Resume } from "@/sanity/lib/sanity";

interface ResumeSectionProps {
  resumeData: Resume[];
}

export default function ResumeSection({ resumeData }: ResumeSectionProps) {
  return (
    <div className="max-w-5xl px-4 mx-auto sm:px-6 mb-8">
      <div className="space-y-8">
        <h2 className="h3 text-slate-200">Resume</h2>
        <ul className="space-y-8">
          {resumeData.map((item) => (
            <li key={item._key} className="relative group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    width={56}
                    height={56}
                    src={item.image.asset.url}
                    alt={`${item.title} Logo`}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium leading-6">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {item.startDate} - {item.endDate}
                  </p>
                  <div className="mt-2 text-sm text-slate-200">
                    <PortableText
                      value={item.description}
                      components={ptComponents}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
