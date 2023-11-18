import { createContext, useEffect, useState } from "react";
import { ThemeContext } from "../../hooks/useContextTheme";
import { Theme, ThemeContextType } from "../../types/types";

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
