import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { PortableTextComponent } from "@/lib/types/portable-types";
import { Button } from "@/components/ui/button";

export interface CodeBlock {
  _type: "code";
  code: string;
  language?: string;
}

export const Code: PortableTextComponent<CodeBlock> = ({ value }) => {
  if (!value || !value.code) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <SyntaxHighlighter
        language={value.language || "javascript"}
        style={dracula}
      >
        {value.code}
      </SyntaxHighlighter>
      <CopyToClipboard text={value.code}>
        <Button>Copy Code</Button>
      </CopyToClipboard>
    </div>
  );
};
