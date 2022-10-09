import { useEffect, useState } from 'react';
import { CardModel } from '../../../domain/card';

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import CardExportPDF from '../../../presentation/modules/card/components/CardExportPDF';

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
        {cards.map((card: any) => (
          <CardExportPDF
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
  const handle = (cards: CardModel[]) => {
    console.log(cards);
  };

  const DownloadLinkComponent = ({ cards }: any) => {
    console.log({ cards });

    return (
      <PDFDownloadLink document={<MyDocument cards={cards} />}>
        Meu PDF2
      </PDFDownloadLink>
    );
  };

  return [handle, DownloadLinkComponent];
}
