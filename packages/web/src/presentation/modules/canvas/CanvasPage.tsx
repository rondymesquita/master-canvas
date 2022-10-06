import { Container, Flex, Grid, GridItem, Spacer } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetAreasUseCase } from '../../../app/usecase/GetAreas';
import useGetEmptyCard from '../../../app/usecase/useGetEmptyCard';
import useListCard from '../../../app/usecase/useListCard';
import useRemoveCard from '../../../app/usecase/useRemoveCard';
import useSaveCard from '../../../app/usecase/useSaveCard';
import { AreaModel } from '../../../domain/area';
import { CardCategory, CardModel } from '../../../domain/card';
import Area from '../../components/Area';
import Card from '../../components/Card';
import CardEdit from '../../components/CardEdit';
import Header from '../../components/Header';
import useDisclosure from '../../hooks/useDisclosure';
import PageTemplate from '../../templates/PageTemplate';

// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import { useZoom, ZoomProvider } from '../contexts/ZoomContext';
// import Zoom from '../components/Zoom';

const getAreasUseCase = new GetAreasUseCase();

export default function CanvasPage() {
  let { canvasId } = useParams();

  const [isOpen, onOpen, onClose] = useDisclosure();
  const [isModalOpen, onModalOpen, onModalClose] = useDisclosure();

  const zoomRef = useRef();

  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [templates, setTemplates] = useState<CardModel[]>([]);
  const [cards, setCards] = useState<CardModel[]>([]);
  const [currentCard, setCurrentCard] = useState<CardModel>();
  const [currentCanvasId, setCurrentCanvasId] = useState(canvasId);

  /**
   *
   */
  const [save, saveError] = useSaveCard();
  const [list, listError] = useListCard();
  const [get] = useGetEmptyCard();
  const [remove, removeError] = useRemoveCard();

  useEffect(() => {
    async function fetchData() {
      const areasData = await getAreasUseCase.execute();
      setAreas(areasData);

      setCards(await list());
    }
    fetchData();
  }, []);

  const onCardDelete = async (cardId: string) => {
    console.log({ cardId });
    await remove!(cardId);
    setCards(await list());
  };

  const onAddCard = async (categoryAsString: string) => {
    const emptyCard: CardModel = get(
      CardCategory[categoryAsString as CardCategory],
      canvasId!
    );
    console.log({ emptyCard });

    await save(emptyCard);
    setCards(await list());
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
      RISK: 3,
    };
    return colSpans[category] || 1;
  };

  return (
    <>
      <PageTemplate>
        <CardEdit
          key={currentCard?.id + new Date().toISOString()}
          isOpen={isModalOpen}
          onOpen={onModalOpen}
          onClose={onModalClose}
          onSave={onCardSave}
          title={currentCard?.title}
          content={currentCard?.content}
        ></CardEdit>
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
                onAddClick={() => onAddCard(area.category)}
              >
                {cards
                  .map((c: CardModel) => c)
                  .filter((card: CardModel) => card.category === area.category)
                  .map((card: CardModel, index: number) => (
                    <Card
                      title={card.title}
                      key={card.id}
                      content={card.content}
                      onDelete={() => onCardDelete(card.id)}
                      onClick={() => openCardEditModal(card.id)}
                    ></Card>
                  ))}
              </Area>
            </GridItem>
          ))}
        </Grid>
      </PageTemplate>
    </>
  );
}