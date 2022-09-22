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
import { CardModel } from '../../domain/card';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';
import CardEdit from '../components/CardEdit';
import { GetEmptyCardUseCase } from '../../application/usecases/GetEmptyCard';
import Header from '../components/Header';

// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import { useZoom, ZoomProvider } from '../contexts/ZoomContext';
// import Zoom from '../components/Zoom';

const getAreasUseCase = new GetAreasUseCase();
const getTemplatesUseCase = new GetTemplatesUseCase();
const getEmptyCardUseCase = new GetEmptyCardUseCase();

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
  const [templates, setTemplates] = useState<CardModel[]>([]);
  const [cards, setCards] = useState<CardModel[]>([]);

  const [currentCard, setCurrentCard] = useState<CardModel>({
    id: '',
    description: '',
    category: '',
    title: '',
    content: {
      persona: ``,
      business: ``,
      acceptance: ``,
      data: ``,
      infra: ``,
      risk: ``,
    },
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

  const onCardDelete = (cardId: string) => {
    setCards((oldCards: any[]) => {
      return oldCards.filter((card) => card.id !== cardId);
    });
  };

  const onAreaAddClick = (category: string) => {
    console.log({ category });
    setCategory(category);

    const emptyCard: CardModel = getEmptyCardUseCase.execute({ category });
    console.log(emptyCard);

    setCards((oldCards: CardModel[]) => {
      return [...oldCards, ...[{ ...emptyCard }]];
    });
  };

  const openCardEditModal = (cardId: string) => {
    console.log(cardId);
    const card = cards.find((card) => card.id === cardId);
    setCurrentCard(card ? card : ({} as CardModel));
    onModalOpen();
  };

  const onCardSave = ({ title, content }: { title: string; content: any }) => {
    console.log(currentCard);

    const copy = [...cards];

    const cardToUpdateIndex = copy.findIndex(
      (card) => card.id === currentCard!.id
    )!;
    const cardToUpdate = copy[cardToUpdateIndex];

    const newCard = {
      ...cardToUpdate,
      content,
      title,
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
      <CardEdit
        key={currentCard.id + new Date().toISOString()}
        isOpen={isModalOpen}
        onOpen={onModalOpen}
        onClose={onModalClose}
        onSave={onCardSave}
        title={currentCard.title}
        content={currentCard.content}
      ></CardEdit>
      <Flex width={'full'} direction={'column'}>
        <Header />
        <Spacer />

        {/* <Zoom ref={zoomRef}> */}
        <Container maxWidth={'full'} pt={4}>
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
                      (card: CardModel) => card.category === area.category
                    )
                    .map((card: CardModel, index: number) => (
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
        </Container>
        {/* </Zoom> */}
      </Flex>
    </>
  );
}
