import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { unifiedSource } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();
  return (
    <DocsLayout
      {...base}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tree={unifiedSource.pageTree as any}
    >
      {children}
    </DocsLayout>
  );
}
