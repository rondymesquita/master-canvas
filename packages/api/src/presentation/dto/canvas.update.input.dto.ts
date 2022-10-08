import { Canvas } from '../../domain/model/canvas';
export type CanvasUpdateInputDTO = Required<
  Pick<Canvas, 'id' | 'title' | 'userId'>
>;
