import { create } from "zustand";

interface activeFriendType {
  activeId: null | number;
  setActive: (id: number) => void;
  clear: () => void;
}

export const activeFriend = create<activeFriendType>((set) => ({
  activeId: null,
  setActive: (id) => set(() => ({ activeId: id })),
  clear: () => set(() => ({ activeId: null })),
}));
