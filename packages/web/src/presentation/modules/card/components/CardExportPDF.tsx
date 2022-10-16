import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { CardCategory, CardContentModel } from '../../../../domain/card';
import DataContent from './DataContent';
import RequirementContent from './RequirementContent';
import RiskContent from './RiskContent';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  card: {
    marginBottom: '36px',
  },
  cardHeader: {
    display: 'flex',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 900,
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    border: '1px solid black',
    borderRadius: '24px',
    marginBottom: '8px',
  },
  blockTitle: {
    fontSize: '18px',
    fontWeight: 900,
  },
  blockText: {
    fontSize: '14px',
  },
});

export default function CardExportPdf({
  title,
  category,
  content,
}: {
  title: string;
  category: string;
  content: any;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {(category === CardCategory.FUNCTIONAL ||
        category === CardCategory.NON_FUNCTIONAL) && (
        <View>
          <View style={styles.block}>
            <Text style={styles.blockTitle}>
              Visão de Persona - Experiência do Usuário
            </Text>
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
      )}
    </View>
  );
}
