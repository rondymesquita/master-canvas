import React from 'react';
import { CardCategory, CardContentModel } from '../../../../domain/card';

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

export default function PdfDocumentCard({
  title,
  category,
  content,
}: {
  title: string;
  category: string;
  content: CardContentModel;
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
                </View>
              </View>
            );
          }
        )}

        {/* {(category === CardCategory.FUNCTIONAL ||
        category === CardCategory.NON_FUNCTIONAL) && (
        <View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Persona</Text>
            <Text style={styles.blockText}>{content.persona}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Negócio</Text>
            <Text style={styles.blockText}>{content.business}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>
              Visão de Critério de Aceitação
            </Text>
            <Text style={styles.blockText}>{content.acceptance}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Dados</Text>
            <Text style={styles.blockText}>{content.data}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Infraestrutura</Text>
            <Text style={styles.blockText}>{content.infra}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>
              Visão de Risco de Produto - Literatura de Teste
            </Text>
            <Text style={styles.blockText}>{content.risk}</Text>
          </View>
        </View>
      )}

      {category === CardCategory.DATA && (
        <View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>
              Visão das Partes Interessadas dos Dados
            </Text>
            <Text style={styles.blockText}>{content.stakeholders}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Negócio dos Dados</Text>
            <Text style={styles.blockText}>{content.business}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Segurança dos Dados</Text>
            <Text style={styles.blockText}>{content.security}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Manutenção dos Dados</Text>
            <Text style={styles.blockText}>{content.maintenance}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>
              Visão de Treinamento dos Dados
            </Text>
            <Text style={styles.blockText}>{content.training}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Visão de Risco dos Dados</Text>
            <Text style={styles.blockText}>{content.risk}</Text>
          </View>
        </View>
      )}

      {category === CardCategory.RISK && (
        <View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Risco</Text>
            <Text style={styles.blockText}>{content.risk}</Text>
          </View>
        </View>
      )}

      {category === CardCategory.ACCEPTANCE && (
        <View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>Critério de Aceitação</Text>
            <Text style={styles.blockText}>{content.acceptance}</Text>
          </View>
        </View>
      )} */}
      </View>
    </View>
  );
}
