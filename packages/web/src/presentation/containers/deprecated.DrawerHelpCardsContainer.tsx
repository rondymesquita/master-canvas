import React, { useRef } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Portal,
  Stack,
} from '@chakra-ui/react';

import { usePortal } from '../contexts/PortalContext';

export type DrawerHelpCardsContainerProps = {
  category: string;
  isOpen: boolean;
  onClose: () => void;
};
export default function DeprecatedDrawerHelpCardsContainer({
  category,
  isOpen,
  onClose,
}: DrawerHelpCardsContainerProps) {
  const { portalLeftRef } = usePortal();

  return (
    <>
      {/* <Portal containerRef={portalLeftRef}> */}
      <Drawer
        portalProps={
          {
            // containerRef: portalLeftRef,
            // appendToParentPortal: false,
          }
        }
        preserveScrollBarGap={true}
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={'sm'}
        closeOnOverlayClick={false}
        // isFullHeight={false}
        // key={new Date().toISOString()}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent bg={'bg.500'}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Heading size={'md'}>Templates "{category}"</Heading>
              {/* {selectedCardIds} */}
            </Center>
          </DrawerHeader>

          <DrawerBody id={'drawer'}>
            {/* <Portal containerRef={ref}>
              Portal: This text is portaled to the yellow box!
            </Portal> */}
            {/* <Box ref={ref} bg="yellow.500">
                <div>Container: Hey,</div>
              </Box> */}
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
      </Drawer>
      {/* </Portal> */}
    </>
  );
}
