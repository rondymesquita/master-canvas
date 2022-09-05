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

const getAreasUseCase = new GetAreasUseCase();
const getTemplatesUseCase = new GetTemplatesUseCase();

export default function DashboardPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [category, setCategory] = useState<String>('');

  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [templates, setTemplates] = useState<TemplateModel[]>([]);
  const [cards, setCards] = useState<TemplateModel[]>([]);

  const filteredCards = cards.filter((cards) => cards.category === category);

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

  const categories = useMemo(() => {
    console.log(areas);
    return areas.map((template) => template.category).join();
  }, [areas]);

  const onAddAreaClick = (category: string) => {
    // setCategory(category);
    onOpen();
  };

  const onSelectTemplate = (template: TemplateModel) => {
    console.log({ template });

    setCards((oldCards: TemplateModel[]) => {
      return [...oldCards, ...[{ ...template }]];
    });

    onClose();
  };

  const onCardDelete = (cardId: string) => {
    setCards((oldCards: any[]) => {
      return oldCards.filter((card) => card.id !== cardId);
    });
  };

  const onQuestionChange = (
    newQuestion: any,
    questionId: string,
    cardId: string
  ) => {
    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        const newQuestions = card.questions.map((q: any) => {
          if (q.id === questionId) {
            return { ...q, ...newQuestion };
          }
          return q;
        });
        card.questions = newQuestions;
        return card;
      }
      return card;
    });

    setCards(newCards);
  };

  const onClickMenuItem = (clickedMenu: string) => {
    console.log({ clickedMenu });
    setCategory(clickedMenu);
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onSelectTemplate={onSelectTemplate}
        templates={templates}
        category={category}
      ></Drawer>
      <Flex borderWidth={1} borderColor={'gray.200'} borderRadius={'lg'}>
        <Sidebar
          borderRightWidth={1}
          p={2}
          category={category}
          onClickMenuItem={onClickMenuItem}
        />
        <Flex bg={'gray.50'} width={'full'} p={4} direction={'column'}>
          <Flex mb={4}>
            <Toolbar onNewClick={onAddAreaClick}></Toolbar>
          </Flex>

          <Flex width={'full'}>
            <Stack>
              {filteredCards.map((card) => (
                <Card
                  title={card.title}
                  key={card.id}
                  description={card.description}
                  questions={card.questions}
                  onDelete={() => onCardDelete(card.id)}
                  onQuestionChange={(newQuestion: any, questionId: string) =>
                    onQuestionChange(newQuestion, questionId, card.id)
                  }
                ></Card>
              ))}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
