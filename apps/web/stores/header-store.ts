import { create } from "zustand";

interface HeaderTheme {
  background: string;
  foreground: string;
  accentColor: string;
}

interface HeaderStore {
  theme: HeaderTheme;
  previousTheme: HeaderTheme;
  direction: "down" | "up";
  animationKey: number;
  setTheme: (theme: HeaderTheme, direction: "down" | "up") => void;
}

const defaultTheme = {
  background: "bg-background",
  foreground: "text-foreground",
  accentColor: "text-primary",
};

export const useHeaderStore = create<HeaderStore>((set) => ({
  theme: defaultTheme,
  previousTheme: defaultTheme,
  direction: "down",
  animationKey: 0,
  setTheme: (theme, direction) =>
    set((state) => {
      if (
        theme.background !== state.theme.background ||
        theme.foreground !== state.theme.foreground ||
        theme.accentColor !== state.theme.accentColor
      ) {
        return {
          previousTheme: state.theme,
          theme,
          direction,
          animationKey: (state.animationKey + 1) % 1000,
        };
      }
      return state;
    }),
}));
