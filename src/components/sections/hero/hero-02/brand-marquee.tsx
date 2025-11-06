"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/showcase/progressive-blur";

export default function BrandMarquee() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background py-20">
      <div className="relative m-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Trusted by industry leaders
          </p>
          <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </div>

        {/* Dual Row Marquee */}
        <div className="relative space-y-8">
          {/* First Row - Left to Right */}
          <div className="relative">
            <InfiniteSlider speedOnHover={15} speed={35} gap={80}>
              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-6 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/openai_logo.svg"
                    alt="OpenAI logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-5 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 dark:invert"
                    src="/brand_logos/figma_logo.svg"
                    alt="Figma logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-7 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/google_Logo.svg"
                    alt="Google logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-6 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/notion_logo.svg"
                    alt="Notion logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-5 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/hubspot_logo.svg"
                    alt="HubSpot logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-6 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/shopify_logo.svg"
                    alt="Shopify logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-32"
              direction="left"
              blurIntensity={1.5}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-32"
              direction="right"
              blurIntensity={1.5}
            />
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <InfiniteSlider speedOnHover={18} speed={32} gap={80} reverse>
              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-6 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/notion_logo.svg"
                    alt="Notion logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-5 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/hubspot_logo.svg"
                    alt="HubSpot logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-6 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/shopify_logo.svg"
                    alt="Shopify logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-6 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/openai_logo.svg"
                    alt="OpenAI logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-5 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 dark:invert"
                    src="/brand_logos/figma_logo.svg"
                    alt="Figma logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>

              <div className="group/logo flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative transform transition-all duration-500 ease-out group-hover/logo:scale-110">
                  <Image
                    className="h-7 w-auto opacity-60 transition-all duration-500 group-hover/logo:opacity-100 invert dark:invert-0"
                    src="/brand_logos/google_Logo.svg"
                    alt="Google logo"
                    height={40}
                    width={120}
                  />
                </div>
              </div>
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-32"
              direction="left"
              blurIntensity={1.5}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-32"
              direction="right"
              blurIntensity={1.5}
            />
          </div>
        </div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>
    </section>
  );
}
