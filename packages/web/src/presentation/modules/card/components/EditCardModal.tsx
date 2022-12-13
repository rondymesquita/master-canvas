import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Icon,
  Portal,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { FaBars, FaDownload, FaSave, FaTimes, FaUpload } from 'react-icons/fa';
import EditableText from '../../../components/EditableText';
import Select from '../../../components/Select';
import { usePortal } from '../../../contexts/PortalContext';
import AbstractCardContent from './AbstractCardContent';

function Actions({ children, cancel, ok, help }: any) {
  return (
    <Flex width="full">
      <Button
        leftIcon={<FaTimes />}
        colorScheme="secondary"
        variant="outline"
        onClick={cancel}
      >
        Voltar
      </Button>
      <Spacer />
      <Box flexShrink={1}>{children}</Box>
      <Spacer />
      <Button leftIcon={<FaSave />} colorScheme="primary" onClick={ok}>
        Salvar
      </Button>
    </Flex>
  );
}

export default function EditCardModal({
  isOpen,
  onOpen,
  onClose,
  onSave,
  onHelp,
  onExport,
  category,
  status: inputStatus,
  title: inputTitle,
  content,
  ui,
}: any) {
  const [title, setTitle] = useState(inputTitle);
  const [status, setStatus] = useState(inputStatus);

  const { portalLeftRef, setPortalLeftVisible } = usePortal();
  const cardContentRef = useRef<any>();

  useEffect(() => {
    setPortalLeftVisible(isOpen);
  }, [isOpen]);

  const onSaveButtonClick = () => {
    const updatedContent = cardContentRef.current.getUpdatedContent();

    onSave({
      title,
      content: updatedContent,
      status,
    });
    onClose();
  };

  const destroyAndClose = () => {
    setTitle('');
    onClose();
  };

  if (!category) {
    return <>no category</>;
  }

  const exportCardAsPDF = () => {
    const updatedContent = cardContentRef.current.getUpdatedContent();
    onExport({ title, content: updatedContent, category, status });
  };

  return (
    <>
      <Portal containerRef={portalLeftRef} data-testid="portal-left-content">
        {isOpen && (
          <Flex
            height={'100vh'}
            // width={'full'}
            data-testid="edit-card-modal"
            bg={'bg.0'}
            p={2}
            position={'relative'}
            flexDirection={'column'}
          >
            <Flex width={'full'} pb={2}>
              <Actions
                cancel={destroyAndClose}
                ok={onSaveButtonClick}
                help={onHelp}
              >
                <EditableText
                  placeholder={'Título do cartão'}
                  as={'textarea'}
                  flexShrink={1}
                  value={title}
                  onChange={setTitle}
                />
              </Actions>
            </Flex>
            <Flex width={'full'} justifyContent={'start'} pb={2} gap={2}>
              <Button
                leftIcon={<Icon as={FaDownload} />}
                colorScheme={'primary'}
                onClick={exportCardAsPDF}
              >
                Exportar PDF
              </Button>
              <Button
                leftIcon={<Icon as={FaUpload} />}
                colorScheme={'primary'}
                variant="outline"
                onClick={exportCardAsPDF}
              >
                Anexar arquivo
              </Button>
              <Spacer />
              <Select
                placeholder={'Status do Cartão'}
                options={ui.allStatus}
                value={status}
                onChange={setStatus}
                size={'sm'}
              />
              <Spacer />
              <Button
                aria-label=""
                leftIcon={<FaBars />}
                colorScheme="secondary"
                variant={'outline'}
                onClick={onHelp}
              >
                Ver Cartas de Ajuda
              </Button>
            </Flex>
            {/* body */}
            <Flex p={2} flexDirection="column" gap={2}>
              <Alert status="info">
                <AlertIcon />
                <Text>
                  Os campos abaixo estão preenchidos com <b>exemplos</b> e você
                  poderá utilizá-los ou não, <b>conforme sua necessidade</b>.
                </Text>
              </Alert>
              <Alert status="info">
                <AlertIcon />
                <Text>
                  Caso a visão não se aplique ao requisito, você pode deixar o
                  campo <b>vazio</b> ou inserir o texto <b>"Não se aplica"</b>.
                </Text>
              </Alert>
            </Flex>
            <Flex flexDirection={'column'} grow={1} overflow="auto">
              <AbstractCardContent
                ref={cardContentRef}
                category={category}
                content={content}
              />
            </Flex>
            <Flex justifyContent={'flex-end'}>
              {/* <Actions
                cancel={destroyAndClose}
                ok={onSaveButtonClick}
              ></Actions> */}
            </Flex>
          </Flex>
        )}
      </Portal>
    </>
  );
}
