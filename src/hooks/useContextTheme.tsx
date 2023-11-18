import { createContext, useContext, useState } from "react";
import { ThemeContextProps } from "../types/types";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
