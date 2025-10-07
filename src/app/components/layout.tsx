import { unifiedSource } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { DocsLayout } from "@/components/layout/docs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tree={unifiedSource.pageTree as any}
    >
      <div className="pt-4">{children}</div>
    </DocsLayout>
  );
}
