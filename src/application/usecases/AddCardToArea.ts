export interface IAddCardToAreaUseCase {
  execute: () => {};
}

import { ModalEvent } from "../../domain/events";
import { Bus } from "../../util/Bus";

export class AddCardToAreaUseCase implements IAddCardToAreaUseCase {
  private bus = Bus.getInstance();
  constructor() {}

  execute() {
    this.bus.emit(ModalEvent.ShowModal);
    return {};
  }
}
