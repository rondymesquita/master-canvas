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
} from '@chakra-ui/react';
import Template from './Template';
import { TemplateModel } from '../../domain/template';

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
    console.log({ templateId });

    return !selectedCardIds.includes(templateId);
  };

  console.log({ selectedCardIds });
  return (
    <>
      <CDrawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
        <DrawerOverlay />
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Heading size={'md'}>Templates "{category}"</Heading>
              {selectedCardIds}
            </Center>
          </DrawerHeader>

          <DrawerBody>
            {templates.length > 0 ? (
              templates.map((template: TemplateModel) => {
                return (
                  <Template
                    key={template.title}
                    onSelect={() => onSelectTemplate(template)}
                    title={template.title}
                    description={template.description}
                    questions={template.questions}
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
          </DrawerBody>

          <DrawerFooter hidden></DrawerFooter>
        </DrawerContent>
      </CDrawer>
    </>
  );
}
