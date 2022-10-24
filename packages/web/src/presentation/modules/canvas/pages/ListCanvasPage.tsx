import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PageTemplate from '../../../templates/PageTemplate';

import { FaPlus, FaSearch } from 'react-icons/fa';
import { v4 } from 'uuid';
import { CanvasModel } from '../../../../domain/model/model/canvas';
import Canvas from '../components/Canvas';
import useDisclosure from '../../../hooks/useDisclosure';
import NewCanvasModal from '../components/NewCanvasModal';
import { useNavigate } from 'react-router-dom';
import useListCanvas from '../../../../app/usecase/useListCanvas';
import useSaveCanvas from '../../../../app/usecase/useSaveCanvas';
import useRemoveCanvas from '../../../../app/usecase/canvas/useRemoveCanvas';
import useUpdateCanvas from '../../../../app/usecase/useUpdateCanvas';
import EditCanvasModal from '../components/EditCanvasModal';
import useRemoveCanvasModal from '../../../../app/usecase/canvas/useRemoveCanvasModal';

export default function ListCanvasPage() {
  const [canvases, setCanvases] = useState<CanvasModel[]>([]);
  const [currentCanvasId, setCurrentCanvasId] = useState<string>('');

  const [isNewOpen, onNewOpen, onNewClose] = useDisclosure();
  const [isEditOpen, onEditOpen, onEditClose] = useDisclosure();

  const [save, saveError] = useSaveCanvas();
  const [list, listError] = useListCanvas();
  const [remove, removeError] = useRemoveCanvas();
  const [removeCanvasModalConfirmation] = useRemoveCanvasModal();
  const [update, updateError] = useUpdateCanvas();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setCanvases(await list());
    }
    fetchData();
  }, []);

  const onSave = async (data: CanvasModel) => {
    await save(data);
    setCanvases(await list());
    // onNewClose();
  };

  const onEdit = async (canvas: CanvasModel) => {
    console.log({ canvas });

    await update!(canvas);
    setCanvases(await list());
    // onEditClose();
  };

  const onClickCanvas = (canvas: CanvasModel) => {
    navigate(`/canvas/${canvas.id}`);
  };

  const onDeleteCanvasClick = async (canvas: CanvasModel) => {
    removeCanvasModalConfirmation()
      .onPrimary(async () => {
        await remove(canvas.id);
        setCanvases(await list());
      })
      .onSecondary(() => {});
  };

  const onEditCanvasClick = async (canvas: CanvasModel) => {
    setCurrentCanvasId(canvas.id);
    onEditOpen();
  };

  return (
    <PageTemplate>
      <NewCanvasModal
        key={`NewCanvasModal${new Date().toISOString()}`}
        {...{
          isOpen: isNewOpen,
          onOpen: onNewOpen,
          onClose: onNewClose,
          onSave,
        }}
      />

      <EditCanvasModal
        key={`EditCanvasModal${new Date().toISOString()}`}
        canvas={canvases.map((c) => c).find((c) => c.id === currentCanvasId)}
        {...{
          isOpen: isEditOpen,
          onOpen: onEditOpen,
          onClose: onEditClose,
          onEdit,
        }}
      />

      {/* <Flex borderWidth="1" p={2}>
        <Flex width={'full'} gap="4">
          <Box flexGrow={1}>
            <Input placeholder="Buscar canvas" />
          </Box>
          <Box flexShrink={0}>
            <Button colorScheme={'primary'} leftIcon={<Icon as={FaSearch} />}>
              Buscar
            </Button>
          </Box>
        </Flex>
      </Flex> */}

      {/* Tollbar */}
      <Flex py={2} flexDirection={'column'}>
        <Heading size={'md'} mb={4}>
          Meus Canvas
        </Heading>
        <Button
          width={'fit-content'}
          colorScheme={'primary'}
          leftIcon={<Icon as={FaPlus} />}
          onClick={() => onNewOpen()}
        >
          Novo Canvas
        </Button>
      </Flex>

      {/* Results */}
      <Grid
        py={2}
        // flexWrap="wrap"
        gap={{
          base: 8,
          sm: 4,
          md: 8,
        }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          // lg: 'repeat(4, 1fr)',
        }}
      >
        {canvases.map((canvas: CanvasModel) => {
          return (
            <Canvas
              key={canvas.id}
              canvas={canvas}
              onClick={onClickCanvas}
              onEditClick={onEditCanvasClick}
              onDeleteClick={onDeleteCanvasClick}
            />
          );
        })}
      </Grid>
    </PageTemplate>
  );
}
