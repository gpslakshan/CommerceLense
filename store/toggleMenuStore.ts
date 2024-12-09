import { create } from "zustand";
import { persist } from "zustand/middleware";

type MenuState = {
  isCollapsed: boolean;
  toggleMenu: () => void;
};

export const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      toggleMenu: () =>
        set((state) => ({
          isCollapsed: !state.isCollapsed,
        })),
    }),
    { name: "menu-store" }
  )
);
