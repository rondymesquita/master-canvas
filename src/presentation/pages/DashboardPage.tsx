import {
  addPrefix,
  Container,
  Flex,
  Box,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Heading,
  Center,
  useDisclosure,
  SimpleGrid,
  Spacer,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Area from '../components/Area';
import Card from '../components/Card';
import Drawer from '../components/Drawer';
import Template from '../components/Template';
import { Command, useCommander } from '../contexts/CommanderContext';
import { AddCardModal } from './dashboard/AddCardModal';
import { v4 } from 'uuid';
import { GetAreasUseCase } from '../../application/usecases/GetAreas';
import { GetTemplatesUseCase } from '../../application/usecases/GetTemplates';
import { AreaModel } from '../../domain/area';
import { TemplateModel } from '../../domain/template';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';
import { GetNewEmptyQuestionUseCase } from '../../application/usecases/GetNewEmptyQuestion';
import CardEdit from '../components/CardEdit';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useZoom, ZoomProvider } from '../contexts/ZoomContext';
import Zoom from '../components/Zoom';

const getAreasUseCase = new GetAreasUseCase();
const getTemplatesUseCase = new GetTemplatesUseCase();

export default function DashboardPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const zoomRef = useRef();

  const [category, setCategory] = useState<String>('');

  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [templates, setTemplates] = useState<TemplateModel[]>([]);
  const [cards, setCards] = useState<TemplateModel[]>([]);

  const [currentCard, setCurrentCard] = useState<TemplateModel>({
    id: '',
    description: '',
    category: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    async function fetchData() {
      const areasData = await getAreasUseCase.execute();
      setAreas(areasData);

      const templatesData = await getTemplatesUseCase.execute();
      setTemplates(templatesData);
    }
    fetchData();
    setCategory('cursos');
  }, []);

  // const onSelectTemplate = (template: TemplateModel) => {
  //   setCards((oldCards: TemplateModel[]) => {
  //     return [...oldCards, ...[{ ...template }]];
  //   });

  //   onClose();
  // };

  const onCardDelete = (cardId: string) => {
    setCards((oldCards: any[]) => {
      return oldCards.filter((card) => card.id !== cardId);
    });
  };

  const onAreaAddClick = (category: string) => {
    console.log({ category });
    setCategory(category);

    const emptyCard: TemplateModel = {
      id: v4(),
      title: 'string',
      description: 'string',
      category,
      content: 'string',
    };
    setCards((oldCards: TemplateModel[]) => {
      return [...oldCards, ...[{ ...emptyCard }]];
    });
  };

  const openCardEditModal = (cardId: string) => {
    console.log(cardId);
    const card = cards.find((card) => card.id === cardId);
    setCurrentCard(card ? card : ({} as TemplateModel));
    onModalOpen();
  };

  const onCardSave = (newContent: string) => {
    console.log(currentCard);

    const copy = [...cards];

    const cardToUpdateIndex = copy.findIndex(
      (card) => card.id === currentCard!.id
    )!;
    const cardToUpdate = copy[cardToUpdateIndex];

    const newCard = {
      ...cardToUpdate,
      content: newContent,
    };
    copy.splice(cardToUpdateIndex, 1, newCard);
    setCards(copy);

    onModalClose();
  };

  const getRowSpanRules = (area: AreaModel) => {
    const { category } = area;
    const rowSpans: any = {
      negocios: 3,
      escrever: 3,
    };
    return rowSpans[category] || 1;
  };
  const getColSpanRules = (area: AreaModel) => {
    const { category } = area;
    const colSpans: any = {
      riscos: 3,
    };
    return colSpans[category] || 1;
  };

  return (
    <>
      {/* <Drawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onSelectTemplate={onSelectTemplate}
        templates={filteredTemplates}
        selectedCardIds={selectedCardIds}
        category={category}
      ></Drawer> */}
      <CardEdit
        isOpen={isModalOpen}
        onOpen={onModalOpen}
        onClose={onModalClose}
        onSave={onCardSave}
        title={currentCard.title}
        content={currentCard.content}
      ></CardEdit>
      <Flex
        borderWidth={1}
        borderColor={'gray.200'}
        borderRadius={'lg'}
        bg={'gray.50'}
        width={'full'}
        direction={'column'}
      >
        <Toolbar
          zoomIn={() => zoomRef.current.zoomIn()}
          zoomOut={() => zoomRef.current.zoomOut()}
          zoomReset={() => zoomRef.current.resetTransform()}
        />
        <Spacer />

        {/* <Zoom ref={zoomRef}> */}
        <Grid templateColumns="repeat(3, 1fr)">
          {areas.map((area: AreaModel, index: number) => (
            <GridItem
              key={index}
              rowSpan={getRowSpanRules(area)}
              colSpan={getColSpanRules(area)}
            >
              <Area
                key={index}
                title={area.title}
                onAddClick={() => onAreaAddClick(area.category)}
              >
                {cards
                  .filter(
                    (card: TemplateModel) => card.category === area.category
                  )
                  .map((card: TemplateModel, index: number) => (
                    <Card
                      title={card.title}
                      key={card.id}
                      description={card.description}
                      content={card.content}
                      onDelete={() => onCardDelete(card.id)}
                      onClick={() => openCardEditModal(card.id)}
                    ></Card>
                  ))}
              </Area>
            </GridItem>
          ))}
        </Grid>
        {/* </Zoom> */}
      </Flex>
    </>
  );
}
