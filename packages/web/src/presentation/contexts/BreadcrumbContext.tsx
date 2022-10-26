import React, { useEffect, useState, useContext, useRef } from 'react';
import { BreadcrumbLinkModel } from '../../domain/model/breadcrumblink';

export type BreadcrumbContextProps = {
  breadcrumbs: BreadcrumbLinkModel[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<BreadcrumbLinkModel[]>>;
};

export const BreadcrumbContext = React.createContext<BreadcrumbContextProps>(
  {} as BreadcrumbContextProps
);

export const useBreadcrumbContext = () => useContext(BreadcrumbContext);

export function BreadcrumbProvider({ children }: any) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLinkModel[]>();
  const value = { breadcrumbs, setBreadcrumbs };

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
