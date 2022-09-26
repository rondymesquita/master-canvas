import { Box, Button, Flex, Grid, Icon, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PageTemplate from '../../templates/PageTemplate';

import { FaPlus, FaSearch } from 'react-icons/fa';
import { v4 } from 'uuid';
import { CanvasModel } from '../../../domain/canvas';
import Canvas from './components/Canvas';
import useDisclosure from '../../hooks/useDisclosure';
import NewCanvasModal from './components/NewCanvasModal';
import { useNavigate } from 'react-router-dom';

export default function ListCanvasPage() {
  const [canvases, setCanvases] = useState<CanvasModel[]>([]);

  const [isNewOpen, onNewOpen, onNewClose] = useDisclosure();
  const [isEditOpen, onEditOpen, onEditClose] = useDisclosure();

  const navigate = useNavigate();

  useEffect(() => {
    setCanvases([
      {
        id: v4(),
        name: 'Meu Canvas',
        cards: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);
  }, []);

  const onSave = (data: any) => {
    console.log('data', { data });
    onNewClose();
  };

  const onClickCanvas = (canvas: CanvasModel) => {
    // console.log(canvas);
    navigate(`/canvas/${canvas.id}`);
  };

  return (
    <PageTemplate>
      <NewCanvasModal
        key={new Date().toISOString()}
        {...{
          isOpen: isNewOpen,
          onOpen: onNewOpen,
          onClose: onNewClose,
          onSave,
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
      <Flex p={2}>
        <Button
          colorScheme={'primary'}
          leftIcon={<Icon as={FaPlus} />}
          onClick={() => onNewOpen()}
        >
          Novo Canvas
        </Button>
      </Flex>

      {/* Results */}
      <Grid
        p={2}
        flexWrap="wrap"
        gap={16}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {canvases.map((canvas: CanvasModel) => {
          return (
            <Canvas key={canvas.id} canvas={canvas} onClick={onClickCanvas} />
          );
        })}
      </Grid>
    </PageTemplate>
  );
}
