import { Canvas } from 'src/domain/model/canvas';
import { CanvasSchema } from '../model/canvas.model';

export class CanvasAdapter {
  adaptList(data: CanvasSchema[]): Canvas[] {
    return data.map((record: CanvasSchema) => {
      return this.adapt(record);
    });
  }
  adapt(record: CanvasSchema) {
    console.log({ record });

    const canvas: Canvas = {
      id: record._id.toString(),
      active: record.active,
      title: record.title,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      user: record.user.toString(),
    };

    return canvas;
  }
}
