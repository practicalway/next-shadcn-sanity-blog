import Portable from "../../_components/portable";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  params: { slug: string; postName: string; authorImg: any };
};

export default function slugCategoryPage({ params }: Props) {
  return (
    <Suspense fallback={<Skeleton />}>
      <Portable postSlug={params.postName} />
    </Suspense>
  );
}
