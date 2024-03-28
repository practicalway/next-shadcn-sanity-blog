import { toPlainText } from "@portabletext/react";

import { PortableTextBlockComponent } from "@/lib/types/portable-types";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
export const LinkableHeader: PortableTextBlockComponent = ({
  value,
  children,
}) => {
  const level = value?.style || "h2";
  const slug = slugify(toPlainText(value));

  let textSizeClass = "text-md";
  if (level === "h1") {
    textSizeClass = "text-3xl";
  } else if (level === "h2") {
    textSizeClass = "text-2xl";
  } else if (level === "h4") {
    textSizeClass = "text-l";
  }

  return (
    <div className="mt-8">
      <span className={`font-bold ${textSizeClass} text-slate-200`} id={slug}>
        <a className="slug-anchor" href={`#${slug}`}>
          {children}
        </a>
      </span>
    </div>
  );
};
