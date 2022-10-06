import { Canvas } from '../model/canvas';

export interface ISaveCanvas {
  handle(input: Canvas): Promise<Canvas>;
}

export interface IUpdateCanvas {
  handle(input: Canvas): Promise<Canvas>;
}

export interface IGetByIdCanvas {
  handle(id: string): Promise<Canvas>;
}

export interface IListCanvasInput {
  user: string;
}
export interface IListCanvas {
  handle(input: IListCanvasInput): Promise<Canvas[]>;
}

export interface IRemoveCanvas {
  handle(id: string): Promise<boolean>;
}
