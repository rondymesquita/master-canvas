/* eslint-disable @typescript-eslint/no-empty-interface */
import { Canvas } from 'src/domain/model/canvas';

export interface ISaveCanvasInput {
  user: string;
}
export interface IListCanvasInput {
  user: string;
}

export interface IUpdateCanvasInput {
  id: string;
  user: string;
}
export interface ICanvasRepo {
  save(input: ISaveCanvasInput): Promise<Canvas>;
  getById(id: string, userId: string): Promise<Canvas>;
  list(input: IListCanvasInput): Promise<Canvas[]>;
  update(input: IUpdateCanvasInput): Promise<Canvas>;
  remove(id: string): Promise<boolean>;
}
