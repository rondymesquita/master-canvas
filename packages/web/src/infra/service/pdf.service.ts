import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
export class PDFService {
  constructor() {}
  async generateAndExport(reactJSXElement: JSX.Element) {
    const doc = pdf(reactJSXElement);
    const blob = await doc.toBlob();
    saveAs(blob, 'document.pdf');
  }
}
