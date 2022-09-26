import { ModalEvent } from "../../domain/events";
import { Bus } from "../../util/Bus";
import React, { useEffect } from "react";
export const ModalContext = React.createContext({});

export function ModalProvider({ children }: any) {
  const bus = Bus.getInstance();

  useEffect(() => {
    bus.on(ModalEvent.ShowModal, () => {
      console.log("Show called");
    });
    return () => {
      bus.off(ModalEvent.ShowModal);
    };
  }, []);

  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
}
