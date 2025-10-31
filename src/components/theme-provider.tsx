"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="hex-ui-theme"
      {...props}
    >
      {mounted ? (
        children
      ) : (
        <div className="bg-background text-foreground min-h-screen">
          {children}
        </div>
      )}
    </NextThemesProvider>
  );
}
