import { HexagonBackground } from "@/components/showcase/hexagon-background";

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 right-0 left-0 h-[65vh] overflow-hidden">
        <HexagonBackground interactive={true} className="absolute inset-0" />
      
        {/* Faded mask */}
        <div className="via-background/30 to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />
        <div className="from-background via-background/80 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />
      </div>
    </div>
  );
}
