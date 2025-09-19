import CodePreviewDemo from "@/components/demo-test";
import { Button } from "@/components/ui/button";

const sourceTsx = `"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type AiGlareLoaderProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function AiGlareLoader({ className, label = "Thinking…", ...props }: AiGlareLoaderProps) {
  return (
    <div className={cn("relative isolate", className)} {...props}>
      {/* Card background */}
      <div className="bg-card/60 border text-foreground relative overflow-hidden rounded-lg p-4">
        {/* Glare sweep */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/2 left-0 h-[200%] w-24 -skew-x-12 bg-white/10 blur-md animate-[glare_2s_ease-in-out_infinite] dark:bg-white/10" />
        </div>

        {/* Content */}
        <div className="flex items-center gap-3">
          {/* Dot wave */}
          <div className="flex items-end gap-1">
            <span className="bg-foreground/70 inline-block h-1.5 w-1.5 animate-[bounce_1s_infinite] rounded-full [animation-delay:-180ms]" />
            <span className="bg-foreground/70 inline-block h-2 w-2 animate-[bounce_1s_infinite] rounded-full [animation-delay:-90ms]" />
            <span className="bg-foreground/70 inline-block h-2.5 w-2.5 animate-[bounce_1s_infinite] rounded-full" />
          </div>

          <div className="text-muted-foreground text-sm">{label}</div>
        </div>
      </div>

  {/* Keyframes */}
  <style jsx>{\`
        @keyframes glare {
          0% { transform: translateX(-40%) rotate(0.001deg); opacity: 0; }
          10% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateX(160%) rotate(0.001deg); opacity: 0; }
        }
        @keyframes bounce {
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Install via shadcn/ui CLI</h2>
        <p className="text-muted-foreground text-sm">Copy and paste to add this component into your project.</p>

        <Snippet defaultValue="npm" className="w-full">
          <SnippetHeader>
            <div className="text-sm font-medium">npm</div>
            <div className="flex items-center gap-1">
              <SnippetCopyButton value={"npx shadcn@latest add ai-glare-loader"} />
            </div>
          </SnippetHeader>

          <SnippetTabsContent value="npm">npx shadcn@latest add ai-glare-loader</SnippetTabsContent>
        </Snippet>
      </section>
    </div>
  );
}
`;

const usageTsx = `import AiGlareLoader from "@/components/ui/loaders/ai-glare-loader";

export default function Example(){
  return (
    <div className="max-w-md">
      <AiGlareLoader label="Thinking…" />
    </div>
  )
}`;

const sourceJsx = `"use client";

import { cn } from "@/lib/utils";

export function AiGlareLoader({ className, label = "Thinking…", ...props }) {
  return (
    <div className={cn("relative isolate", className)} {...props}>
      {/* Card background */}
      <div className="bg-card/60 border text-foreground relative overflow-hidden rounded-lg p-4">
        {/* Glare sweep */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/2 left-0 h-[200%] w-24 -skew-x-12 bg-white/10 blur-md animate-[glare_2s_ease-in-out_infinite] dark:bg-white/10" />
        </div>

        {/* Content */}
        <div className="flex items-center gap-3">
          {/* Dot wave */}
          <div className="flex items-end gap-1">
            <span className="bg-foreground/70 inline-block h-1.5 w-1.5 animate-[bounce_1s_infinite] rounded-full [animation-delay:-180ms]" />
            <span className="bg-foreground/70 inline-block h-2 w-2 animate-[bounce_1s_infinite] rounded-full [animation-delay:-90ms]" />
            <span className="bg-foreground/70 inline-block h-2.5 w-2.5 animate-[bounce_1s_infinite] rounded-full" />
          </div>

          <div className="text-muted-foreground text-sm">{label}</div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{\`
        @keyframes glare {
          0% { transform: translateX(-40%) rotate(0.001deg); opacity: 0; }
          10% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateX(160%) rotate(0.001deg); opacity: 0; }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: .7; }
          40% { transform: translateY(-30%); opacity: 1; }
        }
      \`}</style>
    </div>
  );
}
`;

const usageJsx = `import { AiGlareLoader } from "@/components/ui/loaders/ai-glare-loader";

export default function Example(){
  return (
    <div className="max-w-md">
      <AiGlareLoader label="Thinking…" />
    </div>
  )
}`;

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen px-10 py-20">
      <CodePreviewDemo
        initialTab="preview"
        codeHeight={420}
        preview={
          <div className="">
            <Button className="bg-gradient-to-b from-neutral-200 via-neutral-400 via-90% to-cyan-200 to-99% shadow-2xl backdrop:shadow-2xl text-black">
              Click me
            </Button>
          </div>
        }
        source={{
          defaultValue: "tsx",
          data: [
            {
              language: "tsx",
              filename: "ai-glare-loader.tsx",
              code: sourceTsx,
            },
            {
              language: "jsx",
              filename: "ai-glare-loader.jsx",
              code: sourceJsx,
            },
          ],
        }}
        code={{
          defaultValue: "tsx",
          data: [
            { language: "tsx", filename: "usage.tsx", code: usageTsx },
            { language: "jsx", filename: "usage.jsx", code: usageJsx },
          ],
        }}
      />
    </div>
  );
}
