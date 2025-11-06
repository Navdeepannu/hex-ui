"use client";
import * as React from "react";
import { sections, sectionCategories, type SectionCategory } from "@/data/sections-registry";
import { cn } from "@/lib/utils";
import { SectionPreviewCard } from "@/components/sections/section-preview-card";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = React.useState<SectionCategory>(
    sectionCategories[0].value
  );
  const [scrollY, setScrollY] = React.useState(0);

  // Track scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when category changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeCategory]);

  const filteredSections = React.useMemo(() => {
    return sections.filter((section) => section.category === activeCategory);
  }, [activeCategory]);

  // Group sections by category for display
  const groupedSections = React.useMemo(() => {
    const groups = new Map<SectionCategory, typeof sections>();

    filteredSections.forEach((section) => {
      const existing = groups.get(section.category) || [];
      groups.set(section.category, [...existing, section]);
    });

    return groups;
  }, [filteredSections]);

  return (
    <div className="min-h-screen">
      {/* Category Navigation */}
      <div className="dark:border-accent sticky top-0 z-40 mx-auto border-t border-b border-zinc-200 border-t-zinc-200/50 bg-white transition-transform duration-300 ease-out dark:bg-black">
        <div className="border-sidebar-accent relative mx-auto max-w-7xl border-x">
          <nav className="flex items-center gap-2 overflow-x-auto px-4 py-3">
            {/* Popular Tags Label */}
            <span className="border-accent pr-2 border-r text-xs font-medium tracking-wider whitespace-nowrap text-neutral-500 uppercase dark:text-neutral-500">
              Sections
            </span>

            {/* Category Buttons */}
            {sectionCategories.map((category) => {
              const isActive = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={cn(
                    "relative rounded-md px-4 py-1.5 text-xs font-medium tracking-wider whitespace-nowrap uppercase transition-colors duration-200",
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content with Patterns */}
      <div className="relative">
        {/* Pattern Container - Centered with content */}
        <div className="pointer-events-none absolute inset-0 hidden lg:flex lg:justify-center">
          <div className="flex w-full max-w-[calc(1400px+200px)]">
            {/* Left Pattern */}
            <div className="-z-100 w-[50px] shrink-0 border-x border-x-black/5 bg-[image:repeating-linear-gradient(315deg,_rgb(0_0_0_/_5%)_0,_rgb(0_0_0_/_5%)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed dark:border-x-white/10 dark:bg-[image:repeating-linear-gradient(315deg,_rgb(255_255_255_/_10%)_0,_rgb(255_255_255_/_10%)_1px,_transparent_0,_transparent_50%)]"></div>

            {/* Spacer for content */}
            <div className="flex-1"></div>

            {/* Right Pattern */}
            <div className="w-[50px] shrink-0 border-x border-x-black/5 bg-[image:repeating-linear-gradient(315deg,_rgb(0_0_0_/_5%)_0,_rgb(0_0_0_/_5%)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed dark:border-x-white/10 dark:bg-[image:repeating-linear-gradient(315deg,_rgb(255_255_255_/_10%)_0,_rgb(255_255_255_/_10%)_1px,_transparent_0,_transparent_50%)]"></div>
          </div>
        </div>

        {/* Main Content - flows above patterns */}
        <div className="relative">
          {/* Sections Display */}
          <div className="">
            {filteredSections.length === 0 ? (
              <div className="py-32 text-center">
                <div className="mb-4 text-5xl">🔍</div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  No components found in this category yet. Check back soon!
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-32">
                  {Array.from(groupedSections.entries()).map(([category, categorySections]) => (
                    <div key={category} className="space-y-16">
                      {/* Section cards */}
                      <div className="">
                        {categorySections.map((section) => (
                          <SectionPreviewCard key={section.id} section={section} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden border-t border-neutral-200/60 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:border-white/10 dark:from-neutral-950 dark:to-neutral-900">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-28">
              <div className="text-center">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/80 px-5 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-950/80">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    Join the Community
                  </span>
                </div>

                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
                  Ready to build something beautiful?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-pretty text-neutral-600 sm:text-lg dark:text-neutral-400">
                  Join thousands of developers building amazing products with Hex UI. Get updates on
                  new components and exclusive content.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://twitter.com/hexui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                  >
                    Follow on Twitter
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/yourusername/hex-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200/60 bg-white px-8 py-3.5 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md dark:border-white/10 dark:bg-neutral-950 dark:text-white dark:hover:border-white/20"
                  >
                    Star on GitHub
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-y-[-2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </a>
                </div>

                {/* Social proof */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
                  <div className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-neutral-400 to-neutral-500 dark:border-neutral-950" />
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-neutral-500 to-neutral-600 dark:border-neutral-950" />
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-neutral-600 to-neutral-700 dark:border-neutral-950" />
                    </div>
                    <span className="font-medium">Trusted by 10,000+ developers</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">4.9/5 average rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
