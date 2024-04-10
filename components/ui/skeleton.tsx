import { cn } from "@/lib/utils";

function Skeleton({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "card" | "heading" | "text";
}) {
  const variantClasses = {
    default: "",
    card: "h-64 md:h-80",
    heading: "h-6 w-1/2",
    text: "h-4 w-full",
  };

  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export const SkeletonCard = () => (
  <div className="p-4">
    <Skeleton variant="card" className="mb-4" />
    <div className="space-y-2">
      <Skeleton variant="heading" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-4/5" />
    </div>
  </div>
);

export const SkeletonGrid = () => (
  <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
    {[...Array(6)].map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);
export const SkeletonPostPage = () => (
  <article className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <Skeleton className="h-12 w-1/2 mb-4" />
        <Skeleton className="h-6 w-1/4 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <div className="mt-8 space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  </article>
);

export { Skeleton };
