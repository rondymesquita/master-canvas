import { ModalResultModel, ModalTypeModel } from '../../../domain/ui/modal';
import useModalConfirmation from '../../../presentation/hooks/useModalConfirmation';

export default function useRemoveCardModal(): [() => ModalResultModel] {
  const [setModal, showAndGetResult] = useModalConfirmation();

  const handle = () => {
    setModal({
      type: ModalTypeModel.DESTRUCTIVE,
      title: 'Apagar cartão',
      content: 'Deseja apagar o cartão? Essa ação não poderá ser desfeita.',
      primaryLabel: 'Apagar',
      secondaryLabel: 'Manter',
    });
    return showAndGetResult();
  };

  return [handle];
}
