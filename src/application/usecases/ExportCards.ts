export interface IExportCardsUseCase {
  execute: (payload: any) => Promise<any>;
}

import { ModalEvent } from "../../domain/events";
import { Bus } from "../../util/Bus";

export class ExportCardsUseCase implements IExportCardsUseCase {
  private bus = Bus.getInstance();

  async execute(payload: any) {
    // this.bus.emit(ModalEvent.ShowModal);
    console.log("ExportCardsUseCase use case called", { payload });
    // payload.modal.current.show();
  }
}
