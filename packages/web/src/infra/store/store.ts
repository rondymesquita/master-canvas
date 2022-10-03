import create from 'zustand';

export interface GlobalStore {
  user: any;
  setUser: Function;
}

export const useGlobalStore = create<GlobalStore>(
  (set): GlobalStore => ({
    user: { name: 'rondy' },
    setUser: (user: any) => set(() => user),
  })
);
