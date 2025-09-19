import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { unifiedSource } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tabMode="sidebar"
      {...baseOptions()}
      tree={unifiedSource.pageTree as any}
    >
      {children}
    </DocsLayout>
  );
}
