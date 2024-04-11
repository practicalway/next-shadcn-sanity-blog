"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function MobileModeToggle() {
  const { theme, setTheme } = useTheme();
  const [modeText, setModeText] = React.useState("Switch To Dark Mode");

  React.useEffect(() => {
    if (theme === "light") {
      setModeText("Switch To Dark Mode");
    } else if (theme === "dark") {
      setModeText("Switch To System Mode");
    } else {
      setModeText("Switch To Light Mode");
    }
  }, [theme]);

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full h-16 px-2"
      onClick={toggleMode}
    >
      <div className="flex items-center">
        <Icons.sun className="mr-2 h-4 w-4 transition-opacity duration-300 dark:opacity-0" />
        <Icons.moon className="mr-2 h-4 w-4 transition-opacity duration-300 opacity-0 dark:opacity-100" />
        <span className="transition-all duration-300">{modeText}</span>
      </div>
    </Button>
  );
}
