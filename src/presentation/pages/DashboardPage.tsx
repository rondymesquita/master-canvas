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
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Area from "../components/Area";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import Template from "../components/Template";
import { Command, useCommander } from "../contexts/CommanderContext";
import { AddCardModal } from "./dashboard/AddCardModal";
import { v4 } from "uuid";
import { GetAreasUseCase } from "../../application/usecases/GetAreas";
import { GetTemplatesUseCase } from "../../application/usecases/GetTemplates";
import { AreaModel } from "../../domain/area";
import { TemplateModel } from "../../domain/template";

const getAreasUseCase = new GetAreasUseCase();
const getTemplatesUseCase = new GetTemplatesUseCase();

export default function DashboardPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [category, setCategory] = useState<String>("");
  const [templates, setTemplates] = useState<TemplateModel[]>([]);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const areasData = await getAreasUseCase.execute();
      setAreas(areasData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const templatesData = await getTemplatesUseCase.execute();
      const filteredTemplates = templatesData.filter(
        (template) => template.category === category
      );
      console.log({ filteredTemplates });

      setTemplates(filteredTemplates);
    }
    fetchData();
    console.log({ category });
  }, [category]);

  const onAddAreaClick = (category: string) => {
    setCategory(category);
    onOpen();
  };

  const onSelectTemplate = (template: any) => {
    console.log({ template });

    setCards((oldCards: any[]) => {
      return [...oldCards, template];
    });

    onClose();
  };

  const onCardDelete = (cardId: string) => {
    setCards((oldCards: any[]) => {
      return oldCards.filter((card) => card.id !== cardId);
    });
  };

  const onCardResponseChange = (
    newResponse: string,
    questionId: string,
    cardId: string
  ) => {
    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        const newQuestions = card.questions.map((question: any) => {
          if (question.id === questionId) {
            return { ...question, response: newResponse };
          }
          return question;
        });
        card.questions = newQuestions;
        return card;
      }
      return card;
    });

    setCards(newCards);
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
      <Flex>
        <Box width={"full"}>
          {areas.map((area) => (
            <Area
              key={area.id}
              title={area.title}
              icon=""
              onAddClick={onAddAreaClick}
              category={area.category}
            >
              <Stack>
                {cards
                  .filter((card) => card.category === area.category)
                  .map((card) => (
                    <Card
                      title={card.title}
                      key={card.id}
                      description={card.description}
                      questions={card.questions}
                      onDelete={() => onCardDelete(card.id)}
                      onResponseChange={(
                        newResponse: string,
                        questionId: string
                      ) =>
                        onCardResponseChange(newResponse, questionId, card.id)
                      }
                    ></Card>
                  ))}
              </Stack>
            </Area>
          ))}
        </Box>
      </Flex>
    </>
  );
}
