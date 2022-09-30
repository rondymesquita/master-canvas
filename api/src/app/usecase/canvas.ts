import { IRemoveCanvas } from './../../domain/usecase/canvas';
import { Inject, Injectable } from '@nestjs/common';
import { Canvas } from 'src/domain/model/canvas';
import { IListCanvas, ISaveCanvas } from 'src/domain/usecase/canvas';
import { ICanvasRepo } from '../service/repo/icanvas.repo';

@Injectable()
export class SaveCanvas implements ISaveCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(input: Canvas): Promise<Canvas> {
    return await this.canvasRepo.save(input);
  }
}

@Injectable()
export class ListCanvas implements IListCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(): Promise<Canvas[]> {
    return await this.canvasRepo.list();
  }
}

@Injectable()
export class RemoveCanvas implements IRemoveCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(id: string): Promise<boolean> {
    return await this.canvasRepo.remove(id);
  }
}
