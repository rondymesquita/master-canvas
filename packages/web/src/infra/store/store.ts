import create from 'zustand';
import { BreadcrumbLink } from '../../domain/breadcrumblink';

// export intef
export interface GlobalStore {
  user: string | null;
  setUser: Function;

  // breadcrumbs: Array<BreadcrumbLink>;
  // setBreacrumbPath: Function;
  // removeBreacrumbPath: Function;
}

export const useGlobalStore = create<GlobalStore>(
  (set, get): GlobalStore => ({
    user: null,
    setUser: (user: string) => set((state) => ({ ...state, user })),

    // breadcrumbs: [],
    // setBreacrumbPath: (path: string) => set((state) => ({ ...state, breadcrumbs: })),
    // removeBreacrumbPath: (user: any) => set((state) => ({ user })),
  })
);
