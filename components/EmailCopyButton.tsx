import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

export function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <a
        href={`mailto:${email}`}
        className="text-base font-semibold text-accent hover:underline"
      >
        {email}
      </a>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className="text-accent hover:text-accent hover:bg-accent/10"
        title="Copy email address"
      >
        {copied ? (
          <Checkbox className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
