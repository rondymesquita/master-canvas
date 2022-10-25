import {
  IListCanvasInput,
  ISaveCanvasInput,
  IUpdateCanvasInput,
} from './../../../app/service/repo/icanvas.repo';
import { Injectable } from '@nestjs/common';
import { Canvas } from 'src/domain/model/canvas';
import { ICanvasRepo } from 'src/app/service/repo/icanvas.repo';
import { CanvasAdapter } from '../adapter/canvas.adapter';
import { CanvasModel } from '../model/canvas.model';

@Injectable()
export class CanvasRepo implements ICanvasRepo {
  private adapter: CanvasAdapter;
  constructor() {
    this.adapter = new CanvasAdapter();
  }
  async save(input: ISaveCanvasInput): Promise<Canvas> {
    const model = new CanvasModel(input);
    const data = await model.save();
    return this.adapter.adapt(data);
  }
  async list(input: IListCanvasInput): Promise<Canvas[]> {
    const data = await CanvasModel.find(
      // { active: true, user: input.user },
      { active: true },
      null,
      { sort: { updatedAt: -1 } },
    );
    return this.adapter.adaptList(data);
  }
  async getById(id: string, userId: string): Promise<Canvas> {
    // console.log('repo', { id });

    // const data = await CanvasModel.find({ id, user: userId });
    const data = await CanvasModel.findById(id).populate('user');
    return this.adapter.adapt(data);
  }
  async update(input: IUpdateCanvasInput): Promise<Canvas> {
    const data = await CanvasModel.findByIdAndUpdate(input.id, input);
    return this.adapter.adapt(data);
  }
  async remove(id: string): Promise<boolean> {
    const data = await CanvasModel.findByIdAndUpdate(id, { active: false });
    return Promise.resolve(true);
  }
}
