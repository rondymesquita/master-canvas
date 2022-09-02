import {
  Button,
  Drawer as CDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import Template from "./Template";
import { v4 } from "uuid";

export default function Drawer({
  title,
  isOpen,
  onOpen,
  onClose,
  onSelectTemplate,
}: any) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const TEMPLATES = [
    {
      id: v4(),
      title: "Descritivo Básico",
      category: "cursos",
      description: "Descrição do curso o qual se deseja criar ou ajustar",
      questions: [
        {
          id: v4(),
          question: "Qual area de atuação?",
          response: "Ex: Engenharia de Software",
        },
        {
          id: v4(),
          question: "Pergunta",
          response: "Ex: Resposta",
        },
      ],
    },
  ];

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <CDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}

            {TEMPLATES.map((template) => {
              return (
                <Template
                  key={template.title}
                  onSelect={() => onSelectTemplate(template)}
                  title={template.title}
                  description={template.description}
                  questions={template.questions}
                />
              );
            })}
          </DrawerBody>

          <DrawerFooter hidden>
            <Button
              colorScheme="primary"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="primary">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </CDrawer>
    </>
  );
}
