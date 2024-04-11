"use client";
import { Suspense } from "react";
import { WorkContent } from "./_components/work-content";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <WorkContent />
      </Suspense>
    </div>
  );
}
