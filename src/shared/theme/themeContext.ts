import { createContext } from "react";

export const ThemeContext = createContext<
{
  setTheme: (theme: 'dark' | 'light') => void;
  theme: 'light' | 'dark'
}
>({
  setTheme: () => {},
  theme: 'light'
});