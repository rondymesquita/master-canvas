import create from 'zustand';
import { UserModel } from '../../domain/user';

// export intef
export interface GlobalStore {
  user: UserModel | null;
  setUser: Function;

  // breadcrumbs: Array<BreadcrumbLink>;
  // setBreacrumbPath: Function;
  // removeBreacrumbPath: Function;
}

export const useGlobalStore = create<GlobalStore>(
  (set, get): GlobalStore => ({
    user: null,
    setUser: (user: UserModel) => set((state) => ({ ...state, user })),

    // breadcrumbs: [],
    // setBreacrumbPath: (path: string) => set((state) => ({ ...state, breadcrumbs: })),
    // removeBreacrumbPath: (user: any) => set((state) => ({ user })),
  })
);
