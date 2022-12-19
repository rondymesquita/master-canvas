import React from 'react';
import { CardContent } from '../../../../domain/model/card';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { categories, labels } from './labels';

const styles = StyleSheet.create({
  card: {
    marginBottom: '36px',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 900,
  },
  cardSubtitle: {
    fontSize: '16px',
    fontWeight: 900,
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    padding: '14px',
    border: '1px solid black',
    borderRadius: '24px',
    marginBottom: '8px',
  },
  blockTitle: {
    fontSize: '16px',
    fontWeight: 900,
  },
  blockText: {
    fontSize: '12px',
  },
});

function createHTMLfromContent(content: string) {
  if (typeof content === 'string') {
    console.log({ content });
    return { __html: `${content}` };
  }
}

export default function PdfDocumentCard({
  title,
  category,
  content,
}: {
  title: string;
  category: string;
  content: CardContent;
}) {
  // console.log(Object.keys(content));

  return (
    <View style={styles.card}>
      {/* header */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>Tipo: {categories[category]}</Text>
      </View>
      {/* body */}
      <View>
        {Object.entries(content).map(
          ([propertyName, propertyValue]: any, index: number) => {
            return (
              <View key={index}>
                <View style={styles.block}>
                  <Text style={styles.blockTitle}>
                    {labels[category][propertyName]}
                  </Text>
                  <Text style={styles.blockText}>{propertyValue}</Text>
                  {/* <Text
                    style={styles.blockText}
                    // @ts-ignore
                    dangerouslySetInnerHTML={createHTMLfromContent(
                      propertyValue,
                    )}
                  ></Text> */}
                </View>
              </View>
            );
          },
        )}
      </View>
    </View>
  );
}
