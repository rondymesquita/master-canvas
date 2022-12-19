import { useEffect, useState } from 'react';
import {
  CardCategory,
  CardModel,
  CardStatus,
} from '../../../domain/model/card';
import { CardService } from '../../../infra/rest/card.service';
import { waitPromise } from '../../../util/waitpromise';
import useGetTemplateCard from './useGetTemplateContent';

export default function useGetEmptyCard() {
  const [getTemplate] = useGetTemplateCard();
  const get = (category: CardCategory, canvas: string) => {
    const data: CardModel = {
      id: '',
      title: 'Título do Card',
      category,
      content: getTemplate(category),
      status: CardStatus.NOT_STARTED,
      canvas,
    };
    return data;
  };
  return [get];
}
