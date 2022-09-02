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

const DEFAULT_AREAS = [
  {
    title: "Cursos",
    category: "cursos",
    icon: "",
    templates: ["Fulano", "Sicrano"],
    cards: [],
  },
];

const DEFAULT_CARDS: any = [];

const templates = [];

export default function DashboardPage() {
  const { execute } = useCommander();
  const modal = useRef();

  const [areas, setAreas] = useState(DEFAULT_AREAS);
  const [cards, setCards] = useState<any[]>(DEFAULT_CARDS);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onAddAreaClick = ({ templates, category }: any) => {
    onOpen();

    // execute(Command.CARD_ADD, {
    //   selectedOption,
    // });
  };

  const onSelectTemplate = (template: any) => {
    console.log({ template });

    setCards((oldCards: any[]) => {
      return [...oldCards, template];
    });
  };

  const onDeleteCard = (cardId: string) => {
    setCards((oldCards: any[]) => {
      return oldCards.filter((card) => card.id !== cardId);
    });
  };

  return (
    <>
      {/* <AddCardModal ref={modal}></AddCardModal> */}
      <Drawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onSelectTemplate={onSelectTemplate}
      ></Drawer>
      <Wrap>
        <WrapItem>
          {areas.map((area) => (
            <Area
              key={area.title}
              title={area.title}
              icon=""
              onAddClick={onAddAreaClick}
              templates={area.templates}
              category={area.category}
            >
              {cards
                // .filter((card) => card.category === area.category)
                .map((card) => (
                  // <h1 key={card.category}>{card.category}</h1>
                  <Card
                    title={card.title}
                    key={card.title}
                    description={card.description}
                    questions={card.questions}
                    onDelete={() => onDeleteCard(card.id)}
                  ></Card>
                ))}
            </Area>
          ))}
        </WrapItem>
        <WrapItem hidden>
          <Flex direction={"column"}>
            <Center>
              <Heading size={"md"}>Cards</Heading>
            </Center>
            <Stack spacing="4"></Stack>
          </Flex>
        </WrapItem>
      </Wrap>
      <Wrap></Wrap>
    </>
  );
}
