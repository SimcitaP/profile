import { useState, useEffect } from "react";

const THEME_EVENT = "portfolio-theme-change";

export default function useTheme() {
  const [dark, setDark] = useState(
    () => (localStorage.getItem("theme") ?? "dark") === "dark"
  );

  // Keep DOM class and localStorage in sync whenever dark changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Listen for changes triggered by other hook instances on the same page
  useEffect(() => {
    const handler = (e) => setDark(e.detail.dark);
    window.addEventListener(THEME_EVENT, handler);
    return () => window.removeEventListener(THEME_EVENT, handler);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: { dark: next } }));
  };

  return { dark, toggleTheme };
}
