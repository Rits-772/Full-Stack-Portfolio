import { useEffect, useState } from "react";
import { ThemeContext } from "./constants";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark" // Default to dark for premium feel
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider
            value={{ isDarkMode: theme === "dark", toggleDarkMode: toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};