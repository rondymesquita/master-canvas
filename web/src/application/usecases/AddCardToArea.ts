export interface IAddCardToAreaUseCase {
  execute: (payload: any) => Promise<any>;
}

import { ModalEvent } from "../../domain/events";
import { Bus } from "../../util/Bus";

export class AddCardToAreaUseCase implements IAddCardToAreaUseCase {
  private bus = Bus.getInstance();

  async execute(payload: any) {
    // this.bus.emit(ModalEvent.ShowModal);
    console.log("use case called", { payload });
    // payload.modal.current.show();
  }
}
