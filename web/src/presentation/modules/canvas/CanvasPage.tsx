import {
  Container,
  Flex,
  Grid,
  GridItem,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { GetAreasUseCase } from '../../../app/usecase/GetAreas';
import { GetEmptyCardUseCase } from '../../../app/usecase/GetEmptyCard';
import { GetTemplatesUseCase } from '../../../app/usecase/GetTemplates';
import useListCard from '../../../app/usecase/useListCard';
import useRemoveCard from '../../../app/usecase/useRemoveCard';
import useSaveCard from '../../../app/usecase/useSaveCard';
import { AreaModel } from '../../../domain/area';
import { CardModel } from '../../../domain/card';
import Area from '../../components/Area';
import Card from '../../components/Card';
import CardEdit from '../../components/CardEdit';
import Header from '../../components/Header';

// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import { useZoom, ZoomProvider } from '../contexts/ZoomContext';
// import Zoom from '../components/Zoom';

const getAreasUseCase = new GetAreasUseCase();
const getTemplatesUseCase = new GetTemplatesUseCase();
const getEmptyCardUseCase = new GetEmptyCardUseCase();

export default function CanvasPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const zoomRef = useRef();

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

  const [save, saveError] = useSaveCard();
  const [remove, removeError] = useRemoveCard();
  const [list, listError] = useListCard();

  useEffect(() => {
    async function fetchData() {
      const areasData = await getAreasUseCase.execute();
      setAreas(areasData);

      const templatesData = await getTemplatesUseCase.execute();
      setTemplates(templatesData);

      // const x = await list();
      // console.log(x);

      setCards(await list());
      // setCards([]);
    }
    fetchData();
  }, []);

  const onCardDelete = (cardId: string) => {
    // setCards((oldCards: any[]) => {
    //   return oldCards.filter((card) => card.id !== cardId);
    // });
  };

  const onAreaAddClick = (category: string) => {
    // setCategory(category);

    const emptyCard: CardModel = getEmptyCardUseCase.execute({ category });

    save(emptyCard);
    // setCards((oldCards: CardModel[]) => {
    //   return [...oldCards, ...[{ ...emptyCard }]];
    // });
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
    console.log({ newCard });
    copy.splice(cardToUpdateIndex, 1, newCard);
    // setCards(copy);
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
                    .map((c: CardModel) => c)
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
