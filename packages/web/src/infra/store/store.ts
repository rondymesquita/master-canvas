import create from 'zustand';
import { User } from '../../domain/user';

export interface GlobalStore {
  user: User | null;
  setUser: Function;
}

export const useGlobalStore = create<GlobalStore>(
  (set, get): GlobalStore => ({
    user: null,
    setUser: (user: any) => set((state) => ({ user })),
  })
);
