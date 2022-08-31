import { ModalEvent } from "../../domain/events";
import { Bus } from "../../util/Bus";
import React, { useEffect } from "react";
const Context = React.createContext({});

export default function ModalContext({ children }: any) {
  const bus = Bus.getInstance();

  useEffect(() => {
    bus.on(ModalEvent.ShowModal, () => {
      console.log("Show called");
    });
    return () => {
      bus.off(ModalEvent.ShowModal);
    };
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
