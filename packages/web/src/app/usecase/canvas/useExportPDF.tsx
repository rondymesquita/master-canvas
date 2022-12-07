import { CardModel } from '../../../domain/model/card';

import { Document, Page, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import CardPdfDocument from '../../../presentation/modules/card/components/PdfDocument';
import { CanvasModel } from '../../../domain/model/canvas';
import { PDFService } from '../../../infra/service/pdf.service';
import { CanvasService } from '../../../infra/rest/canvas.service';

export default function useExportPDF(): any {
  const pdfService = new PDFService();

  const service = new CanvasService();

  const exportPDF = async (
    id: string,
    canvas: CanvasModel,
    cards: CardModel[]
  ) => {
    // const response = await service.export_(id);
    // console.log(response.data);

    // saveAs(response.data, 'document.pdf');

    // console.log(cards[0].content);

    await pdfService.generateAndExport(
      <CardPdfDocument canvas={canvas} cards={cards} />
    );
  };

  return [exportPDF];
}
