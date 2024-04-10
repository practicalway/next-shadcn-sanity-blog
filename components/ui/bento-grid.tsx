import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  footer,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex space-x-4 p-4",
        className,
      )}
    >
      <div className="w-1/2 flex-shrink-0">{header}</div>
      <div className="w-1/2 flex-grow group-hover/bento:translate-x-2 transition duration-200 overflow-hidden">
        {icon && <div className="mb-2">{icon}</div>}
        <div className="font-sans font-bold mb-2 mt-2 line-clamp-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs line-clamp-3">
          {description}
        </div>
        <div className="mt-4">{footer}</div>
      </div>
    </div>
  );
};
