"use client";

import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const hasChildren = !!item.items?.length;

        return (
          <SidebarGroup key={item.title}>
            {/* Category heading */}
            <SidebarGroupLabel className="text-foreground/70 mb-2 px-2 text-xs font-semibold tracking-wider uppercase">
              {item.title}
            </SidebarGroupLabel>

            {/* Menu items */}
            {hasChildren && (
              <SidebarMenu>
                {item.items!.map((subItem) => {
                  const isActive = pathname === subItem.url;

                  return (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="group font-normal hover:bg-transparent data-[active=true]:bg-transparent"
                      >
                        <Link href={subItem.url}>
                          <span
                            className={
                              isActive
                                ? "text-foreground font-medium"
                                : "text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200"
                            }
                          >
                            {subItem.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            )}
          </SidebarGroup>
        );
      })}
    </>
  );
}
