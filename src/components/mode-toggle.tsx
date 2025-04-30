"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="hover:cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-4 text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden size-4 text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
