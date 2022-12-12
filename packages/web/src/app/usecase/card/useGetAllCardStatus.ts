import { CardStatus } from '../../../domain/model/card';

export default function useGetAllCardStatus() {
  const get = () => {
    return Object.entries({
      [CardStatus.NOT_STARTED]: 'Não iniciado',
      [CardStatus.IN_PROGRESS]: 'Em progresso',
      [CardStatus.BLOCKED]: 'Bloqueado',
      [CardStatus.UNDER_REVISION]: 'Em revisão',
      [CardStatus.DONE]: 'Concluído',
    });
  };
  return [get];
}
