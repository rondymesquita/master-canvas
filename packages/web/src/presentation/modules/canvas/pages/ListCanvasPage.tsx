import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PageTemplate from '../../../templates/PageTemplate';

import { FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import { v4 } from 'uuid';
import { CanvasModel } from '../../../../domain/model/canvas';
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
import { useBreadcrumbContext } from '../../../contexts/BreadcrumbContext';
import { HOME_PAGE } from '../../../route/routes';

const useStarredCanvas = () => {
  const [starredCanvas, setStarredCanvas] = useState<string[]>([]);
  const addStarredCanvas = (id: string) => {
    setStarredCanvas((value: string[]) => {
      console.log(value);
      if (!value.includes(id)) {
        return [...value, id];
      } else {
        return value;
      }
    });
  };

  const removeStarredCanvas = (id: string) => {
    const index = starredCanvas.indexOf(id);
    // console.log(id, index);
    const copy = [...starredCanvas];
    copy.splice(index, 1);
    setStarredCanvas(copy);
  };
  return {
    starredCanvas,
    addStarredCanvas,
    removeStarredCanvas,
  };
};

export default function ListCanvasPage() {
  const [canvas, setCanvas] = useState<CanvasModel[]>([]);
  const [currentCanvasId, setCurrentCanvasId] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('all');
  const {
    starredCanvas,
    addStarredCanvas,
    removeStarredCanvas,
  } = useStarredCanvas();

  const [isNewOpen, onNewOpen, onNewClose] = useDisclosure();
  const [isEditOpen, onEditOpen, onEditClose] = useDisclosure();

  const [save, saveError] = useSaveCanvas();
  const [list, listError] = useListCanvas();
  const [remove, removeError] = useRemoveCanvas();
  const [removeCanvasModalConfirmation] = useRemoveCanvasModal();
  const [update, updateError] = useUpdateCanvas();

  const { setBreadcrumbs } = useBreadcrumbContext();

  const navigate = useNavigate();

  const filteredCanvas =
    filterValue === 'starred'
      ? canvas.filter((c) => starredCanvas.includes(c.id))
      : canvas;

  useEffect(() => {
    async function fetchData() {
      setCanvas(await list());
    }
    fetchData();
    setBreadcrumbs([
      {
        href: HOME_PAGE,
        title: 'Início',
        icon: FaHome,
      },
    ]);
  }, []);

  const onSave = async (data: CanvasModel) => {
    await save(data);
    setCanvas(await list());
    // onNewClose();
  };

  const onEdit = async (canvas: CanvasModel) => {
    console.log({ canvas });

    await update!(canvas);
    setCanvas(await list());
    // onEditClose();
  };

  const onClickCanvas = (canvas: CanvasModel) => {
    navigate(`/canvas/${canvas.id}`);
  };

  const onDeleteCanvasClick = async (canvas: CanvasModel) => {
    removeCanvasModalConfirmation()
      .onPrimary(async () => {
        await remove(canvas.id);
        setCanvas(await list());
      })
      .onSecondary(() => {});
  };

  const onEditCanvasClick = async (canvas: CanvasModel) => {
    setCurrentCanvasId(canvas.id);
    onEditOpen();
  };

  const starCanvas = async (canvas: CanvasModel) => {
    if (starredCanvas.includes(canvas.id)) {
      removeStarredCanvas(canvas.id);
    } else {
      addStarredCanvas(canvas.id);
    }
    // console.log(canvas);
    // alert();
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
        canvas={canvas.map((c) => c).find((c) => c.id === currentCanvasId)}
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
          variant={'primary'}
          colorScheme={'primary'}
          leftIcon={<Icon as={FaPlus} />}
          onClick={() => onNewOpen()}
        >
          Novo Canvas
        </Button>
      </Flex>
      {/* {JSON.stringify(starredCanvas)} */}
      <Flex>
        <RadioGroup onChange={setFilterValue} value={filterValue}>
          <b>Exibir</b>
          <Stack direction="row">
            <Radio value="all">Todos</Radio>
            <Radio value="starred">Somente favoritos</Radio>
            {/* <Radio value="3">Third</Radio> */}
          </Stack>
        </RadioGroup>
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
        {filteredCanvas.map((canvas: CanvasModel) => {
          return (
            <Canvas
              key={canvas.id}
              canvas={canvas}
              onClick={onClickCanvas}
              onEditClick={onEditCanvasClick}
              onDeleteClick={onDeleteCanvasClick}
              onStarClick={starCanvas}
              isStarred={starredCanvas.includes(canvas.id)}
            />
          );
        })}
      </Grid>
    </PageTemplate>
  );
}
