import { Canvas } from '../model/canvas';

export interface ISaveCanvas {
  handle(input: Canvas): Promise<Canvas>;
}

export type IUpdateCanvasInput = Required<
  Pick<Canvas, 'id' | 'title' | 'userId'>
>;
export interface IUpdateCanvas {
  handle(input: IUpdateCanvasInput): Promise<Canvas>;
}

export interface IGetByIdCanvas {
  handle(id: string): Promise<Canvas>;
}

export type IListCanvasInput = Required<Pick<Canvas, 'userId'>>;
export interface IListCanvas {
  handle(input: IListCanvasInput): Promise<Canvas[]>;
}

export interface IRemoveCanvas {
  handle(id: string): Promise<boolean>;
}
