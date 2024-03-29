"use client";
import { Suspense } from "react";
import { WorkContent } from "./_components/work-content";
import { MultiStepLoaderWork } from "./_components/multi-step-loader-work";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<MultiStepLoaderWork />}>
        <WorkContent />
      </Suspense>
    </div>
  );
}
