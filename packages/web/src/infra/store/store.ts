import create from 'zustand';
import { BreadcrumbLink } from '../../domain/breadcrumblink';
import { User } from '../../domain/user';

// export intef
export interface GlobalStore {
  user: User | null;
  setUser: Function;

  // breadcrumbs: Array<BreadcrumbLink>;
  // setBreacrumbPath: Function;
  // removeBreacrumbPath: Function;
}

export const useGlobalStore = create<GlobalStore>(
  (set, get): GlobalStore => ({
    user: null,
    setUser: (user: any) => set((state) => ({ ...state, user })),

    // breadcrumbs: [],
    // setBreacrumbPath: (path: string) => set((state) => ({ ...state, breadcrumbs: })),
    // removeBreacrumbPath: (user: any) => set((state) => ({ user })),
  })
);
