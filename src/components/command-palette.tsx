import * as React from "react";
import { useRouter } from "next/navigation";
import {
  IconCircleDot,
  IconSearch,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { data } from "@/data/sidebar";

interface SearchItem {
  title: string;
  url: string;
  category: string;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Flatten all items from sidebar data
  const allItems: SearchItem[] = React.useMemo(() => {
    const items: SearchItem[] = [];
    data.navMain.forEach((section) => {
      section.items.forEach((item) => {
        if (item.url !== "#") {
          items.push({
            title: item.title,
            url: item.url,
            category: section.title,
          });
        }
      });
    });
    return items;
  }, []);

  // Filter items based on search
  const filteredItems = React.useMemo(() => {
    if (!search) return allItems;
    const searchLower = search.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower),
    );
  }, [search, allItems]);

  // Reset selected index when filtered items change
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          router.push(filteredItems[selectedIndex].url);
          onOpenChange(false);
          setSearch("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredItems, selectedIndex, router, onOpenChange]);

  // Reset search when closing
  React.useEffect(() => {
    if (!open) {
      setSearch("");
      setSelectedIndex(0);
    }
  }, [open]);

  const handleItemClick = (url: string) => {
    router.push(url);
    onOpenChange(false);
    setSearch("");
  };

  // Group items by category
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-border max-w-2xl gap-0 overflow-hidden border-3 p-0">
        <DialogTitle className="sr-only">Command Palette</DialogTitle>

        {/* Search Input */}
        <div className="flex items-center border-b border-neutral-200 px-4 dark:border-neutral-800">
          <IconSearch className="text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="Search Documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="placeholder:text-muted-foreground flex-1 bg-transparent px-3 py-4 text-sm outline-none"
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center text-sm">
              No results found.
            </div>
          ) : (
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-4 last:mb-0">
                <div className="text-muted-foreground px-3 py-2 text-xs font-medium">
                  {category}
                </div>
                <div className="space-y-1">
                  {items.map((item) => {
                    const globalIndex = filteredItems.indexOf(item);
                    return (
                      <button
                        key={item.url}
                        onClick={() => handleItemClick(item.url)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                          globalIndex === selectedIndex
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        }`}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-md">
                          <IconCircleDot className="size-4" />
                        </div>
                        <span className="flex-1">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
