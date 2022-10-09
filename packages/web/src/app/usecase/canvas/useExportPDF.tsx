import { CardModel } from '../../../domain/card';

import { Document, Page, StyleSheet, pdf } from '@react-pdf/renderer';
import CardExportPDF from '../../../presentation/modules/card/components/CardExportPDF';
import { saveAs } from 'file-saver';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '32px',
  },
});

function getTextFromHtml(html: string) {
  var divContainer = document.createElement('div');
  divContainer.innerHTML = html;
  return divContainer.textContent || divContainer.innerText || '';
}

const MyDocument = ({ cards }: any) => {
  const getContentInPlainText = (card: any) => {
    if (typeof card.content === 'string') {
      return getTextFromHtml(card.content);
    }

    const contentInPlainText: any = {};

    Object.entries(card.content).forEach(([key, value]: any) => {
      contentInPlainText[key] = getTextFromHtml(value);
    });
    return contentInPlainText;
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {cards.map((card: any, index: number) => (
          <CardExportPDF
            key={index}
            title={card.title}
            category={card.category}
            content={getContentInPlainText(card)}
          />
        ))}
      </Page>
    </Document>
  );
};

export default function useExportPDF(): any {
  const exportPDF = async (cards: CardModel[]) => {
    const doc = pdf(<MyDocument cards={cards} />);
    const blob = await doc.toBlob();
    saveAs(blob, 'document.pdf');
  };

  return [exportPDF];
}
