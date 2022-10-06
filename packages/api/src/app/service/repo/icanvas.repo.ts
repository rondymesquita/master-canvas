/* eslint-disable @typescript-eslint/no-empty-interface */
import { Canvas } from 'src/domain/model/canvas';

export interface IListCanvasInput {
  user: string;
}
export interface ICanvasRepo {
  save(input: Canvas): Promise<Canvas>;
  getById(id: string): Promise<Canvas>;
  list(input: IListCanvasInput): Promise<Canvas[]>;
  update(input: Canvas): Promise<Canvas>;
  remove(id: string): Promise<boolean>;
}
