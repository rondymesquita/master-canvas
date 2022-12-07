import { IUpdateCanvas } from '../../domain/usecase/icanvas.usecase';
import { CanvasRepo } from '../../infra/db/repo/canvas.repo';
import { Module } from '@nestjs/common';
import { CanvasController } from '../../presentation/controller/canvas.controller';
import {
  ExportCanvas,
  GetCanvasById,
  ListCanvas,
  RemoveCanvas,
  SaveCanvas,
  UpdateCanvas,
} from '../../app/usecase/canvas.usecase';
import { CardRepo } from '../../infra/db/repo/card.repo';
import { PDFService } from '../../infra/service/pdf/pdf.service';

@Module({
  imports: [],
  controllers: [CanvasController],
  providers: [
    {
      provide: 'ICanvasRepo',
      useClass: CanvasRepo,
    },
    {
      provide: 'ICardRepo',
      useClass: CardRepo,
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
      provide: 'IGetCanvasById',
      useClass: GetCanvasById,
    },
    {
      provide: 'IRemoveCanvas',
      useClass: RemoveCanvas,
    },
    {
      provide: 'IUpdateCanvas',
      useClass: UpdateCanvas,
    },
    {
      provide: 'IExportCanvas',
      useClass: ExportCanvas,
    },
    {
      provide: 'IPDFService',
      useClass: PDFService,
    },
  ],
})
export class CanvasModule {}
