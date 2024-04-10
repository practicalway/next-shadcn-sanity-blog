import Portable from "../../_components/portable";
import { Suspense } from "react";
import { SkeletonPostPage } from "@/components/ui/skeleton";

type Props = {
  params: { slug: string; postName: string; authorImg: any };
};

export default function slugCategoryPage({ params }: Props) {
  return (
    <Suspense fallback={<SkeletonPostPage />}>
      <Portable postSlug={params.postName} />
    </Suspense>
  );
}
