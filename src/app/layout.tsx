import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hex UI - Beautiful React Component Library",
    template: "%s | Hex UI",
  },
  description:
    "Production-ready UI components built with React, Next.js, Tailwind CSS, and Framer Motion. 50+ components including hero sections, features, pricing, testimonials, and more.",
  keywords: [
    "react components",
    "nextjs components",
    "tailwind components",
    "ui library",
    "design system",
    "component library",
    "framer motion",
    "shadcn",
    "radix ui",
    "typescript",
    "responsive design",
    "dark mode",
  ],
  authors: [{ name: "Hex UI Team", url: "https://hex-ui.com" }],
  creator: "Hex UI Team",
  publisher: "Hex UI",
  metadataBase: new URL("https://hex-ui.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hex-ui.com",
    title: "Hex UI - Beautiful React Component Library",
    description:
      "Production-ready UI components built with React, Next.js, Tailwind CSS, and Framer Motion.",
    siteName: "Hex UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex UI - Beautiful React Component Library",
    description:
      "Production-ready UI components built with React, Next.js, Tailwind CSS, and Framer Motion.",
    creator: "@hexui",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SidebarProvider
            defaultOpen
            style={{ "--sidebar-top": "2.5rem" } as React.CSSProperties}
          >
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
