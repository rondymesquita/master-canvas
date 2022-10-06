import { IListCanvasInput } from './../../../app/service/repo/icanvas.repo';
import { Injectable } from '@nestjs/common';
import { Canvas } from 'src/domain/model/canvas';
import { ICanvasRepo } from 'src/app/service/repo/icanvas.repo';
import { CanvasAdapter } from '../adapter/canvas.adapter';
import { CanvasModel } from '../model/canvas.model';

@Injectable()
export class CanvasRepo implements ICanvasRepo {
  private adapter: any;
  constructor() {
    this.adapter = new CanvasAdapter();
  }
  async save(input: Canvas): Promise<Canvas> {
    const model = new CanvasModel(input);
    const data = await model.save();
    console.log(data);
    return this.adapter.adapt(data);
  }
  async list(input: IListCanvasInput): Promise<Canvas[]> {
    const data = await CanvasModel.find({ active: true, user: input.user });
    console.log(data);
    return this.adapter.adaptList(data);
  }
  async getById(id: string): Promise<Canvas> {
    const data = await CanvasModel.findById(id);
    console.log(data);
    return this.adapter.adapt(data);
  }
  async update(input: Canvas): Promise<Canvas> {
    const data = await CanvasModel.findByIdAndUpdate(input.id, input);
    console.log(data);
    return this.adapter.adapt(data);
  }
  async remove(id: string): Promise<boolean> {
    const data = await CanvasModel.findByIdAndUpdate(id, { active: false });
    console.log(data);
    return Promise.resolve(true);
  }
}
