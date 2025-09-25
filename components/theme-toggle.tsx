"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const active = theme === "system" ? systemTheme : theme;

    return (
        <div>
            <button
                aria-label="Toggle theme"
                onClick={() => setTheme(active === "dark" ? "light" : "dark")}
                style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: 6,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    color: "var(--card-foreground)",
                }}
            >
                {active === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
    );
}
