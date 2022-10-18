import React from 'react';
import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Drawer as CDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
} from '@chakra-ui/react';

export type DrawerHelpCardsContainerProps = {
  category: string;
  isOpen: boolean;
  onClose: () => void;
};
export default function DrawerHelpCardsContainer({
  category,
  isOpen,
  onClose,
}: DrawerHelpCardsContainerProps) {
  return (
    <>
      <CDrawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
        {/* <DrawerOverlay /> */}
        <DrawerContent bg={'background.100'}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Heading size={'md'}>Templates "{category}"</Heading>
              {/* {selectedCardIds} */}
            </Center>
          </DrawerHeader>

          <DrawerBody>
            {/* <Stack gap={2}>
              {templates.length > 0 ? (
                templates.map((template: CardModel) => {
                  return (
                    <Template
                      key={template.id}
                      onSelect={() => onSelectTemplate(template)}
                      title={template.title}
                      content={template.content}
                      // questions={template.questions}
                      isEnabled={isTemplateEnabled(template.id)}
                    />
                  );
                })
              ) : (
                <Alert status="warning" borderWidth={1} boxShadow={'md'}>
                  <AlertIcon />
                  Vazio
                </Alert>
              )}
            </Stack> */}
          </DrawerBody>

          <DrawerFooter hidden></DrawerFooter>
        </DrawerContent>
      </CDrawer>
    </>
  );
}
