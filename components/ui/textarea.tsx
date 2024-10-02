import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {} // eslint-disable-line @typescript-eslint/no-empty-object-type
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/10 placeholder:text-white/10 focus:border-accent outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
