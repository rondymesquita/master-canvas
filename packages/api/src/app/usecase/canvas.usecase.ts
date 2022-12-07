import { Unauthorized } from './../../domain/error/unauthorized';
import {
  IRemoveCanvas,
  IUpdateCanvas,
  IListCanvasInput,
  IUpdateCanvasInput,
  IGetCanvasById,
  ISaveCanvasInput,
  IExportCanvas,
} from '../../domain/usecase/icanvas.usecase';
import { Inject, Injectable } from '@nestjs/common';
import { Canvas } from '../../domain/model/canvas';
import { IListCanvas, ISaveCanvas } from '../../domain/usecase/icanvas.usecase';
import { ICanvasRepo } from '../service/repo/icanvas.repo';
import { ICardRepo } from '../service/repo/icard.repo';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import PdfDocument from '../../infra/service/pdf/template/PdfDocument';
import { pdf, renderToStream } from '@react-pdf/renderer';

@Injectable()
export class SaveCanvas implements ISaveCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(input: ISaveCanvasInput): Promise<Canvas> {
    return await this.canvasRepo.save(input);
  }
}

@Injectable()
export class UpdateCanvas implements IUpdateCanvas {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(input: IUpdateCanvasInput): Promise<Canvas> {
    // console.log({ input });

    // if (input != userId) {
    // throw new Unauthorized();
    // }
    // const canvas: Canvas = await this.canvasRepo.getById(
    //   input.id,
    //   input.userId,
    // );
    // if (!canvas) throw Error('not found');
    return await this.canvasRepo.update(input);
  }
}

@Injectable()
export class GetCanvasById implements IGetCanvasById {
  constructor(@Inject('ICanvasRepo') private canvasRepo: ICanvasRepo) {}
  async handle(id: string): Promise<Canvas> {
    return await this.canvasRepo.getById(id, '0');
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

@Injectable()
export class ExportCanvas implements IExportCanvas {
  constructor(
    @Inject('ICanvasRepo') private canvasRepo: ICanvasRepo,
    @Inject('ICardRepo') private cardRepo: ICardRepo, // @Inject('IPDFService') private pdfService: ,
  ) {}

  async handle(id: string): Promise<any> {
    const [canvas, cards] = await Promise.all([
      this.canvasRepo.getById(id, '0'),
      this.cardRepo.list({ canvas: id }),
    ]);

    // console.log(Object.keys(React));
    // console.log(React);

    // const pdfDocumentElement = React.createElement(PdfDocument, {
    //   canvas,
    //   cards,
    // });

    // const pdfDocumentElement = ReactDOM.renderToStaticMarkup(
    //   PdfDocument({ canvas, cards }),
    // );

    // const renderStream = await renderToStream(PdfDocument({ canvas, cards }));
    // let streamData;
    // renderStream.on('data', (chunk: any) => {
    //   streamData += chunk;
    // });
    // renderStream.on('end', () => {
    //   console.log(streamData);
    // });

    const pdfDocument = pdf(PdfDocument({ canvas, cards }));

    // console.log(canvas, cards);
    return await pdfDocument.toBuffer();
  }
}
