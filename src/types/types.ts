export type Props = {
  image: string;
  id: number;
};

export interface Movie {
  id: number;
  name: string;
  year: number;
  image: string;
  cast: string[];
  description: string;
}

export interface UseMovieDataProps {
  apiKey: string;
}

export type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
