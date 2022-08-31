import { Container } from "@chakra-ui/react";
import Area from "../components/Area";
import { AddCardToAreaUseCase } from "../../application/usecases/AddCardToArea";
import { useEffect } from "react";

const areas = [
  {
    title: "Cursos",
    icon: "",
  },
  {
    title: "Cursos2",
    icon: "",
  },
  {
    title: "Cursos3",
    icon: "",
  },
];

export default function DashboardPage() {
  let useCase: any;

  const onAddAreaClick = () => {
    useCase.execute();
  };

  useEffect(() => {
    useCase = new AddCardToAreaUseCase();
  }, []);

  return (
    <>
      <Container>
        {areas.map((area) => (
          <Area
            key={area.title}
            title={area.title}
            icon=""
            onAddClick={onAddAreaClick}
          ></Area>
        ))}
      </Container>
    </>
  );
}
