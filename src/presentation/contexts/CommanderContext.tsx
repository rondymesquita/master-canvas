import React, { useEffect, useContext } from "react";
import { AddCardToAreaUseCase } from "../../application/usecases/AddCardToArea";

interface ICommandContext {
  execute: (command: Command, payload?: any) => Promise<void>;
}

export enum Command {
  CARD_ADD = "CARD_ADD",
}

export const CommanderContext = React.createContext<ICommandContext>({});

export const useCommander = () => useContext(CommanderContext);

export function CommanderProvider({ children }: any) {
  useEffect(() => {
    console.log("command initialized");

    return () => {};
  }, []);

  const execute = async (command: Command, payload?: any) => {
    const commands = {
      [Command.CARD_ADD]: new AddCardToAreaUseCase(),
    };

    const useCase = commands[command];
    console.log("command called", { useCase, command, payload });
    await useCase.execute(payload);
  };

  return (
    <CommanderContext.Provider value={{ execute }}>
      {children}
    </CommanderContext.Provider>
  );
}
