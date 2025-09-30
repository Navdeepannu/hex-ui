import LogoHexagon from "@/components/ui/logo";
import LogoHexagonAniation from "@/components/ui/logo-animate";

export default function DemoPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-1">
        <LogoHexagon size={30} />
        <span className="tracking-tight text-xl">Hex UI</span>
      </div>
    </div>
  );
}
