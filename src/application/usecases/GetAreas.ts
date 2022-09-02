import { ModalEvent } from "../../domain/events";
import { AreaModel } from "../../domain/area";
import { Bus } from "../../util/Bus";
import { v4 } from "uuid";

export interface IGetAreasUseCase {
  execute: () => Promise<Area[]>;
}

export class GetAreasUseCase implements IGetAreasUseCase {
  private bus = Bus.getInstance();

  async execute(): Promise<AreaModel[]> {
    console.log("GetAreasUseCase use case called");
    const data = [
      {
        id: v4(),
        title: "Cursos",
        category: "cursos",
        icon: "",
      },
      {
        id: v4(),
        title: "Objetivos",
        category: "objetivos",
        icon: "",
      },
    ];
    return data;
  }
}
