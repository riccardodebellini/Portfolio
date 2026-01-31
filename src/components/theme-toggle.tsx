"use client";

import * as React from "react";
import {Monitor, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light");
        }
    };

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" && (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all"/>
            )}
            {theme === "dark" && (
                <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"/>
            )}
            {theme === "system" && (
                <Monitor className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"/>
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
