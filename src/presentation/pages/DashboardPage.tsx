import { addPrefix, Container } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Area from "../components/Area";
import { Template } from "../components/Template";
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

const DEFAULT_CARDS = [
  {
    category: "cursos",
  },
];

const templates = [];

export default function DashboardPage() {
  const { execute } = useCommander();
  const modal = useRef();

  const [areas, setAreas] = useState(DEFAULT_AREAS);
  const [cards, setCards] = useState<any[]>(DEFAULT_CARDS);

  const onAddAreaClick = ({ templates, category }: any) => {
    console.log({ templates, category });
    // areas.find((area) => area.category === category);
    const card = {
      category: category,
    };

    setCards((oldCards: any[]) => {
      return [...oldCards, card];
    });

    // setAreas((state) => ([...areas, ]))

    // execute(Command.CARD_ADD, {
    //   selectedOption,
    // });
  };

  return (
    <>
      {/* <AddCardModal ref={modal}></AddCardModal> */}

      <Container>
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
              .filter((c) => c.category === area.category)
              .map((card) => (
                // <h1 key={card.category}>{card.category}</h1>
                <Template key={v4()} data={{}}></Template>
              ))}
          </Area>
        ))}
      </Container>
    </>
  );
}
