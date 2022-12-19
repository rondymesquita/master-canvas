import { Canvas } from '../model/canvas';

export interface ISaveCanvasInput {
  id?: string;
  active?: boolean;
  user: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISaveCanvas {
  handle(input: ISaveCanvasInput): Promise<Canvas>;
}

export type IUpdateCanvasInput = Required<
  Pick<ISaveCanvasInput, 'id' | 'title' | 'user'>
>;
export interface IUpdateCanvas {
  handle(input: IUpdateCanvasInput): Promise<Canvas>;
}

export interface IGetCanvasById {
  handle(id: string): Promise<Canvas>;
}

export type IListCanvasInput = Required<Pick<ISaveCanvasInput, 'user'>>;
export interface IListCanvas {
  handle(input: IListCanvasInput): Promise<Canvas[]>;
}

export interface IRemoveCanvas {
  handle(id: string): Promise<boolean>;
}

export interface IExportCanvas {
  handle(id: string): Promise<any>;
}
