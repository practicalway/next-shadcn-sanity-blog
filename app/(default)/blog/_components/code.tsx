import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

import { PortableTextComponent } from "@/lib/types/portable-types";
import { Button } from "@/components/ui/button";

export interface CodeBlock {
  _type: "code";
  code: string;
  language?: string;
}

export const Code: PortableTextComponent<CodeBlock> = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  if (!value || !value.code) {
    return null;
  }

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={value.language || "javascript"}
        style={dracula}
        customStyle={{ padding: "1.5rem" }}
      >
        {value.code}
      </SyntaxHighlighter>
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <CopyToClipboard text={value.code} onCopy={handleCopy}>
          <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
            {isCopied ? "Code Copied!" : "Copy Code"}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
