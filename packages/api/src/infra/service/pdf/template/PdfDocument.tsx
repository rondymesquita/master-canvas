import {
  Document,
  Page,
  StyleSheet,
  pdf,
  View,
  Text,
  Link,
} from '@react-pdf/renderer';
import { Card, CardCategory } from '../../../../domain/model/card';
import PdfDocumentCard from './PdfDocumentCard';

// function getTextFromHtml(html: string) {
//   var divContainer = document.createElement('div');
//   divContainer.innerHTML = html;
//   return divContainer.textContent || divContainer.innerText || '';
// }

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    marginBottom: '24px',
    textAlign: 'center',
    alignItems: 'center',
    // border: '1px solid red',
  },
  title: {
    display: 'flex',
    fontSize: '24px',
    fontWeight: 900,
    // textAlign: 'center',
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '32px',
  },
});

export default function PdfDocument({ canvas, cards }: any) {
  const orderArray = Object.keys(CardCategory);

  const sortedCards = [...cards].sort((left: Card, right: Card) => {
    console.log(left.category);

    return (
      orderArray.indexOf(left.category.toString()) -
      orderArray.indexOf(right.category.toString())
    );
  });

  const getContentInPlainText = (card: any) => {
    // if (typeof card.content === 'string') {
    //   return getTextFromHtml(card.content);
    // }

    const contentInPlainText: any = {};

    Object.entries(card.content).forEach(([key, value]: any) => {
      // contentInPlainText[key] = getTextFromHtml(value);
      contentInPlainText[key] = value;
    });
    return contentInPlainText;
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text>{canvas?.title}</Text>
          </View>
          <View style={styles.meta}>
            <Text>Exportado em {new Date().toLocaleString()}</Text>
            <Text>Gerado em canvasnaweb.com.br</Text>
          </View>
        </View>

        {sortedCards.map((card: any, index: number) => (
          <PdfDocumentCard
            key={index}
            title={card.title}
            category={card.category}
            content={getContentInPlainText(card)}
          />
        ))}
      </Page>
    </Document>
  );
}
