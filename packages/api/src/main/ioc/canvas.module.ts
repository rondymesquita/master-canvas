import { IUpdateCanvas } from '../../domain/usecase/icanvas.usecase';
import { CanvasRepo } from '../../infra/db/repo/Canvas.repo';
import { Module } from '@nestjs/common';
import { CanvasController } from '../../presentation/controller/Canvas.controller';
import {
  ListCanvas,
  RemoveCanvas,
  SaveCanvas,
  UpdateCanvas,
} from '../../app/usecase/canvas.usecase';

@Module({
  imports: [],
  controllers: [CanvasController],
  providers: [
    {
      provide: 'ICanvasRepo',
      useClass: CanvasRepo,
    },
    {
      provide: 'ISaveCanvas',
      useClass: SaveCanvas,
    },
    {
      provide: 'IListCanvas',
      useClass: ListCanvas,
    },
    {
      provide: 'IRemoveCanvas',
      useClass: RemoveCanvas,
    },
    {
      provide: 'IUpdateCanvas',
      useClass: UpdateCanvas,
    },
  ],
})
export class CanvasModule {}
