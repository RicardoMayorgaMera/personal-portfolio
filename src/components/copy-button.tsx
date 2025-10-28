"use client";

import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function CopyButton({ rawContent }: { rawContent: string }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(rawContent);

    console.log(rawContent);
    toast.success("Text copied!");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={copyToClipboard} className="cursor-pointer">
          <Copy />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy code</p>
      </TooltipContent>
    </Tooltip>
  );
}
