import { supabase } from "@/api/api";
import type { UserSession } from "@/interfaces/User";
import { create } from "zustand";

interface AuthState {
  user: UserSession | null;
  session: boolean;
  loading: boolean;
  setSession: (session: UserSession) => void;
  logout: () => void;
  checkSession: () => void;
  unsubscribe?: () => void; 
}



export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: false,
  loading: false,
  unsubscribe: undefined,

  setSession: (user: UserSession) => {
    set({
      session: true,
      user: user ?? null,
      loading: false,
    });
  },
  checkSession: async () => {
    set({loading:true})
    const { data } = await supabase.auth.getSession();
    set({ user: (data.session?.user) as unknown as UserSession ?? null, loading: false });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: (session?.user as unknown as UserSession) ?? null, loading: false });
    });

    set({ unsubscribe: listener.subscription.unsubscribe });
  },

  logout: async () => {
    set({loading:true})
    await supabase.auth.signOut();
    set({
      session: false,
      user: null,
      loading: false,
    });
  },
}));
