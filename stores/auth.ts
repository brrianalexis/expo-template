import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
}

type AuthStore = AuthState & AuthActions;

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useAuthStore = create<AuthStore>()((set) => ({
  ...initialState,

  login: (user) => set({ user, isAuthenticated: true, isLoading: false }),

  logout: () => set(initialState),

  setLoading: (isLoading) => set({ isLoading }),
}));
