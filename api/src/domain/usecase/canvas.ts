import { Canvas } from '../model/canvas';

export interface ISaveCanvas {
  handle(input: Canvas): Promise<Canvas>;
}

export interface IGetByIdCanvas {
  handle(id: string): Promise<Canvas>;
}

export interface IListCanvas {
  handle(): Promise<Canvas[]>;
}

export interface IRemoveCanvas {
  handle(id: string): Promise<boolean>;
}
