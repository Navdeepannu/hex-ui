import { notFound } from "next/navigation";
import { getSectionById } from "@/data/sections-registry";

interface PreviewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { id } = await params;
  const section = getSectionById(id);

  if (!section) {
    notFound();
  }

  const Component = section.component;

  return (
    <div className="min-h-screen w-full">
      <Component />
    </div>
  );
}

// Generate static params for all sections
export async function generateStaticParams() {
  const { sections } = await import("@/data/sections-registry");
  return sections.map((section) => ({
    id: section.id,
  }));
}

// Generate metadata for each section preview
export async function generateMetadata({ params }: PreviewPageProps) {
  const { id } = await params;
  const section = getSectionById(id);

  if (!section) {
    return {
      title: "Preview Not Found",
    };
  }

  return {
    title: `${section.name} - Preview | Hex UI`,
    description: section.description,
  };
}
