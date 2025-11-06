import { Navbar } from "@/components/landing/navbar";

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <Navbar template={true} className="mx-auto max-w-7xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
