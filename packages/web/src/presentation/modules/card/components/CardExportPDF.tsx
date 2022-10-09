import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { CardCategory, ContentModel } from '../../../../domain/card';
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
  block: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    border: '1px solid black',
    borderRadius: '24px',
    marginBottom: '8px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 900,
  },
});

export default function CardExportPDF({
  title,
  category,
  content,
}: {
  title: string;
  category: string;
  content: any;
}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Exportado em {new Date().toLocaleDateString()}</Text>
      {(category === CardCategory.FUNCTIONAL ||
        category === CardCategory.NON_FUNCTIONAL) && (
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>
              Visão de Persona - Experiência do Usuário
            </Text>
            <Text>{content.persona}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Negócio</Text>
            <Text>{content.business}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Critério de Aceitação</Text>
            <Text>{content.acceptance}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Dados</Text>
            <Text>{content.data}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Infraestrutura</Text>
            <Text>{content.infra}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>
              Visão de Risco de Produto - Literatura de Teste
            </Text>
            <Text>{content.risk}</Text>
          </View>
        </View>
      )}

      {category === CardCategory.DATA && (
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>
              Visão das Partes Interessadas dos Dados
            </Text>
            <Text>{content.stakeholders}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Negócio dos Dados</Text>
            <Text>{content.business}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Segurança dos Dados</Text>
            <Text>{content.security}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Manutenção dos Dados</Text>
            <Text>{content.maintenance}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Treinamento dos Dados</Text>
            <Text>{content.training}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Visão de Risco dos Dados</Text>
            <Text>{content.risk}</Text>
          </View>
        </View>
      )}

      {category === CardCategory.RISK && (
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>Risco</Text>
            <Text>{content}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
