import type { User } from "@/interfaces/User";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  session: boolean;
  loading: boolean;
  setSession: () => void;
  logout: () => void;
}

const STORAGE_KEY = "session";

const fakeUser: User = {
  id: "1",
  name: 'Deiker Fernandez',
  email: "deiker1842@gmail.com",
  createdAt: "",
  updatedAt: "",
};

const getStoredUser = (): User | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getStoredUser(),
  session: !!getStoredUser(),
  loading: false,

  setSession: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser));

    set({
      session: true,
      user: fakeUser ?? null,
      loading: false,
    });
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({
      session: false,
      user: null,
      loading: false,
    });
  },
}));
