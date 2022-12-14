import { CardModel } from '../../../domain/model/card';

import { Document, Page, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import CardPdfDocument from '../../../presentation/modules/card/components/PdfDocument';
import { CanvasModel } from '../../../domain/model/canvas';

// Create styles

export default function useExportPDF(): any {
  const exportPDF = async (canvas: CanvasModel, cards: CardModel[]) => {
    const doc = pdf(<CardPdfDocument canvas={canvas} cards={cards} />);
    const blob = await doc.toBlob();
    saveAs(blob, 'document.pdf');
  };

  return [exportPDF];
}
