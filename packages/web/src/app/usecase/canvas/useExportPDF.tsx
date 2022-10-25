import { CardModel } from '../../../domain/model/card';

import { Document, Page, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import CardPdfDocument from '../../../presentation/modules/card/components/PdfDocument';
import { CanvasModel } from '../../../domain/model/canvas';
import { PDFService } from '../../../infra/service/pdf.service';

export default function useExportPDF(): any {
  const pdfService = new PDFService();
  const exportPDF = async (canvas: CanvasModel, cards: CardModel[]) => {
    await pdfService.generateAndExport(
      <CardPdfDocument canvas={canvas} cards={cards} />
    );
  };

  return [exportPDF];
}
