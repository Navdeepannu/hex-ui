import { PillNavbar } from "@/components/showcase/pill-navbar";

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <PillNavbar
        links={[
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "Resume", href: "#resume" },
          {
            label: "Blog",
            href: "#blog",
          },
        ]}
        cta={{ label: "Get in touch", href: "#talk" }}
        position="top"
      />
    </div>
  );
}
