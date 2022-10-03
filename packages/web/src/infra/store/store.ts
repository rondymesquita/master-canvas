import create from 'zustand';

export interface GlobalStore {
  user: any;
  setUser: Function;
}

export const useGlobalStore = create<GlobalStore>(
  (set, get): GlobalStore => ({
    user: null,
    setUser: (user: any) => set(() => user),
    // isLogged: () => get().user !
  })
);
