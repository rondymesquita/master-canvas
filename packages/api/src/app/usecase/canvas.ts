import {
  IRemoveCanvas,
  IUpdateCanvas,
  IListCanvasInput,
} from './../../domain/usecase/canvas';
import { Inject, Injectable } from '@nestjs/common';
import { Canvas } from '../../domain/model/canvas';
import { IListCanvas, ISaveCanvas } from '../../domain/usecase/canvas';
import { ICanvasRepo } from '../service/repo/icanvas.repo';

@Injectable()
export class SaveCanvas implements ISaveCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(input: Canvas): Promise<Canvas> {
    return await this.canvasRepo.save(input);
  }
}

@Injectable()
export class UpdateCanvas implements IUpdateCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(input: Canvas): Promise<Canvas> {
    return await this.canvasRepo.update(input);
  }
}

@Injectable()
export class ListCanvas implements IListCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(input: IListCanvasInput): Promise<Canvas[]> {
    return await this.canvasRepo.list(input);
  }
}

@Injectable()
export class RemoveCanvas implements IRemoveCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(id: string): Promise<boolean> {
    return await this.canvasRepo.remove(id);
  }
}
