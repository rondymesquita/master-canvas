import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetAreasUseCase } from '../../../../app/usecase/GetAreas';
import useGetEmptyCard from '../../../../app/usecase/card/useGetEmptyCard';
import useListCard from '../../../../app/usecase/card/useListCard';
import useRemoveCard from '../../../../app/usecase/card/useRemoveCard';
import useSaveCard from '../../../../app/usecase/card/useSaveCard';
import { AreaModel } from '../../../../domain/area';
import { CardCategory, CardModel } from '../../../../domain/card';
import Area from '../../../components/Area';
import Card from '../../../components/Card';
import EditCardModal from '../../card/components/EditCardModal';
import Header from '../../../components/Header';
import useDisclosure from '../../../hooks/useDisclosure';
import PageTemplate from '../../../templates/PageTemplate';
import useUpdateCard from '../../../../app/usecase/card/useUpdateCard';
import useExportPDF from '../../../../app/usecase/canvas/useExportPDF';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import CardExportPDF from '../../card/components/CardExportPDF';
import { FaDownload, FaFileExport } from 'react-icons/fa';
import CardPdfDocument from '../../card/components/CardPdfDocument';
import useGetCanvasById from '../../../../app/usecase/canvas/useGetCanvasById';

// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import { useZoom, ZoomProvider } from '../contexts/ZoomContext';
// import Zoom from '../components/Zoom';

const getAreasUseCase = new GetAreasUseCase();

export default function ViewCanvasPage() {
  let { canvasId } = useParams();

  const [isOpen, onOpen, onClose] = useDisclosure();
  const [isModalOpen, onModalOpen, onModalClose] = useDisclosure();

  const zoomRef = useRef();

  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [templates, setTemplates] = useState<CardModel[]>([]);
  const [cards, setCards] = useState<CardModel[]>([]);
  const [currentCard, setCurrentCard] = useState<CardModel>();
  const [currentCanvasId, setCurrentCanvasId] = useState<string>(canvasId);

  /**
   *
   */
  const [save, saveError] = useSaveCard();
  const [update, updateError] = useUpdateCard();
  const [list] = useListCard();
  const [get] = useGetEmptyCard();
  const [remove, removeError] = useRemoveCard();

  /**
   *
   */

  const [exportPDF] = useExportPDF();
  const [canvas, getByIdError] = useGetCanvasById(canvasId);

  useEffect(() => {
    async function fetchData() {
      const areasData = await getAreasUseCase.execute();
      setAreas(areasData);

      setCards(await list(currentCanvasId));
    }
    fetchData();
  }, []);

  const onCardDelete = async (cardId: string) => {
    await remove!(cardId);
    setCards(await list(currentCanvasId));
  };

  const onAddCard = async (categoryAsString: string) => {
    const emptyCard: CardModel = get(
      CardCategory[categoryAsString as CardCategory],
      currentCanvasId!
    );

    await save(emptyCard);
    setCards(await list(currentCanvasId));
  };

  const openCardEditModal = (cardId: string) => {
    const card = cards.find((card) => card.id === cardId);
    setCurrentCard(card ? card : ({} as CardModel));
    onModalOpen();
  };

  const onCardSave = async ({
    title,
    content,
  }: {
    title: string;
    content: any;
  }) => {
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

    await update(newCard);
    setCards(await list(currentCanvasId));
    onModalClose();
  };

  const onClickExportPDF = async () => {
    await exportPDF(canvas, cards);
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
      RISK: 2,
    };
    return colSpans[category] || 1;
  };

  return (
    <>
      {/* {currentCanvasId} */}
      {/* {JSON.stringify(canvas)} */}
      <PageTemplate>
        <EditCardModal
          key={currentCard?.id + new Date().toISOString()}
          isOpen={isModalOpen}
          onOpen={onModalOpen}
          onClose={onModalClose}
          onSave={onCardSave}
          title={currentCard?.title}
          content={currentCard?.content}
          category={currentCard?.category}
        ></EditCardModal>

        <Flex py={4}>
          {/* <DownloadLinkComponent
            ref={downloadLinkComponentRef}
            cards={cardsToExportPDF}
          /> */}
          <Button
            leftIcon={<Icon as={FaDownload} />}
            colorScheme={'primary'}
            onClick={onClickExportPDF}
          >
            Exportar PDF
          </Button>
        </Flex>

        <>
          {/* <CardPdfDocument
            key={new Date().toISOString()}
            canvas={canvas}
            cards={cards}
          /> */}
        </>

        <Grid templateColumns="repeat(3, 1fr)" shadow={'xl'}>
          {areas.map((area: AreaModel, index: number) => (
            <GridItem
              // border
              // borderColor={'background.500'}
              key={index}
              rowSpan={getRowSpanRules(area)}
              colSpan={getColSpanRules(area)}
            >
              <Area
                key={index}
                category={area.category}
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
