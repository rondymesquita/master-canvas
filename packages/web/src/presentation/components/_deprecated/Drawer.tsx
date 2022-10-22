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
import Template from '../Template';
import { CardModel } from '../../../domain/card';

export default function Drawer({
  title,
  isOpen,
  onOpen,
  onClose,
  onSelectTemplate,
  category,
  templates,
  selectedCardIds,
}: any) {
  const isTemplateEnabled = (templateId: string) => {
    // console.log({ templateId });

    return !selectedCardIds.includes(templateId);
  };

  // console.log({ selectedCardIds });
  return (
    <>
      <CDrawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
        {/* <DrawerOverlay /> */}
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Heading size={'md'}>Templates "{category}"</Heading>
              {selectedCardIds}
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Stack gap={2}>
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
            </Stack>
          </DrawerBody>

          <DrawerFooter hidden></DrawerFooter>
        </DrawerContent>
      </CDrawer>
    </>
  );
}
