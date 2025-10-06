export const sourceTsx = `"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode | string; // can be text, image URL, React element
  links: NavLink[];
  position?: "top" | "bottom"; // position
  cta?: CTAButton; //  CTA button
}

const PillNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, links, position = "bottom", cta, ...props }, ref) => {
    const renderLogo = () => {
      if (!logo) return null;

      if (typeof logo === "string") {
        const isImageUrl = /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(logo);

        if (isImageUrl) {
          return (
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto rounded-full object-contain"
            />
          );
        } else {
          return (
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {logo}
            </span>
          );
        }
      }
      return logo;
    };

    const isImageLogo =
      typeof logo === "string" && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(logo);

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed left-1/2 z-[999] h-fit -translate-x-1/2 rounded-full",
          // Conditional x-padding: increase when there's a non-image logo
          logo && !isImageLogo ? "px-4" : "px-2",
          // Conditional y-padding based on presence of logo and CTA
          !logo && !cta ? "py-3" : logo && !cta ? "py-2.5" : "py-1.5",
          position === "bottom" ? "bottom-4 sm:bottom-8" : "top-4 sm:top-8",
          "bg-white/80 backdrop-blur-xl dark:bg-[#1A1B1C]/40",
          "border border-black/10 shadow-black/10 dark:border-white/10 dark:shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
          "w-full max-w-[75%] md:max-w-fit",
          "flex items-center justify-between md:gap-4",
          "shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
          // Reset any inherited styles from MDX
          "[&_a]:decoration-none [&_a]:no-underline",
          className,
        )}
        {...props}
        style={{
          // Ensure no inherited text decoration
          textDecoration: "none",
          ...props.style,
        }}
      >
        {/* Left side - Brand Logo or name */}
        <div className="flex items-center">
          {renderLogo() && <div className="flex">{renderLogo()}</div>}
        </div>

        {/* Center - Navigation Links */}
        <div className="mx-2 flex flex-1 items-center justify-center gap-6 sm:mx-4 sm:gap-10 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs whitespace-nowrap text-gray-600 no-underline transition-all duration-150 ease-out hover:scale-105 hover:text-gray-900 sm:text-sm dark:text-gray-300/90 dark:hover:text-white"
              style={{
                textDecoration: "none",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side - CTA Button */}
        <div className="flex items-center">
          {cta && (
            <Link
              href={cta.href}
              className={cn(
                "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 sm:gap-2 sm:px-4 sm:py-2",
                "text-xs font-medium sm:text-sm dark:bg-neutral-950 dark:text-neutral-200",
                "border border-black/10 text-black/80 dark:border-white/10",
                "dark:shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
                "shadow-[inset_0px_1px_2px_#00000020,0px_4px_8px_#00000010]",
                "whitespace-nowrap",
                "transition-transform duration-150 ease-out hover:scale-105",
              )}
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <span className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-3/5 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />

              <span>{cta.label}</span>
            </Link>
          )}
        </div>
      </nav>
    );
  },
);

export { PillNavbar };
`;
export const sourceJsx = `"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PillNavbar = React.forwardRef(({
  className,
  logo,
  links,
  position = "bottom",
  cta,
  ...props
}, ref) => {
  const renderLogo = () => {
    if (!logo) return null;

    if (typeof logo === "string") {
      const isImageUrl = /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(logo);

      if (isImageUrl) {
        return (
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto rounded-full object-contain"
          />
        );
      } else {
        return (
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {logo}
          </span>
        );
      }
    }
    return logo;
  };

  const isImageLogo =
    typeof logo === "string" && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(logo);

  return (
    <nav
      ref={ref}
      className={cn(
        "fixed left-1/2 z-[999] h-fit -translate-x-1/2 rounded-full",
        logo && !isImageLogo ? "px-4" : "px-2",
        !logo && !cta ? "py-3" : logo && !cta ? "py-2.5" : "py-1.5",
        position === "bottom" ? "bottom-4 sm:bottom-8" : "top-4 sm:top-8",
        "bg-white/80 backdrop-blur-xl dark:bg-[#1A1B1C]/40",
        "border border-black/10 shadow-black/10 dark:border-white/10 dark:shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
        "w-full max-w-[75%] md:max-w-fit",
        "flex items-center justify-between md:gap-4",
        "shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
        "[&_a]:decoration-none [&_a]:no-underline",
        className
      )}
      {...props}
      style={{
        textDecoration: "none",
        ...props.style,
      }}
    >
      {/* Left side - Brand Logo or name */}
      <div className="flex items-center">
        {renderLogo() && <div className="flex">{renderLogo()}</div>}
      </div>

      {/* Center - Navigation Links */}
      <div className="mx-2 flex flex-1 items-center justify-center gap-6 sm:mx-4 sm:gap-10 md:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs whitespace-nowrap text-gray-600 no-underline transition-all duration-150 ease-out hover:scale-105 hover:text-gray-900 sm:text-sm dark:text-gray-300/90 dark:hover:text-white"
            style={{
              textDecoration: "none",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side - CTA Button */}
      <div className="flex items-center">
        {cta && (
          <Link
            href={cta.href}
            className={cn(
              "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 sm:gap-2 sm:px-4 sm:py-2",
              "text-xs font-medium sm:text-sm dark:bg-neutral-950 dark:text-neutral-200",
              "border border-black/10 text-black/80 dark:border-white/10",
              "dark:shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
              "shadow-[inset_0px_1px_2px_#00000020,0px_4px_8px_#00000010]",
              "whitespace-nowrap",
              "transition-transform duration-150 ease-out hover:scale-105"
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          >
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-3/5 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />

            <span>{cta.label}</span>
          </Link>
        )}
      </div>
    </nav>
  );
});

export { PillNavbar };
`;
