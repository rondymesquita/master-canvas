/* eslint-disable @typescript-eslint/no-empty-interface */
import { Canvas } from 'src/domain/model/canvas';
export interface ICanvasRepo {
  save(input: Canvas): Promise<Canvas>;
  getById(id: string): Promise<Canvas>;
  list(): Promise<Canvas[]>;
  update(input: Canvas): Promise<Canvas>;
  remove(id: string): Promise<boolean>;
}
