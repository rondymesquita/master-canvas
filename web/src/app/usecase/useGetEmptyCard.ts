import { useEffect, useState } from 'react';
import { CardCategory, CardModel } from '../../domain/card';
import { CardService } from '../../infra/rest/card.service';
import { waitPromise } from '../../util/waitpromise';

export default function useGetEmptyCard() {
  const get = (category: CardCategory) => {
    const content =
      category === CardCategory.FUNCTIONAL ||
      category === CardCategory.NON_FUNCTIONAL
        ? {
            persona: `Persona - Lorem ipsum dolor sit amet`,
            business: `Business- Lorem ipsum dolor sit amet`,
            acceptance: `Acceptance - Lorem ipsum dolor sit amet`,
            data: `Data - Lorem ipsum dolor sit amet`,
            infra: `Infra - Lorem ipsum dolor sit amet`,
            risk: `Risk - Lorem ipsum dolor sit amet`,
          }
        : '';
    const data: CardModel = {
      id: '',
      title: 'Título do Card',
      category,
      content,
    };
    return data;
  };
  return [get];
}
