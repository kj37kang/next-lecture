// ~/next-lab/app/p3-18/practice1/useCartStore.js
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] })),
}));