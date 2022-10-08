import { useEffect, useState } from 'react';
import { CardCategory, CardModel, ContentModel } from '../../../domain/card';
import { CardService } from '../../../infra/rest/card.service';
import { waitPromise } from '../../../util/waitpromise';

const requirementContent = {
  persona: `Persona - Lorem ipsum dolor sit amet`,
  business: `Business- Lorem ipsum dolor sit amet`,
  acceptance: `Acceptance - Lorem ipsum dolor sit amet`,
  data: `Data - Lorem ipsum dolor sit amet`,
  infra: `Infra - Lorem ipsum dolor sit amet`,
  risk: `Risk - Lorem ipsum dolor sit amet`,
};

const dataContent = {
  stakeholders: 'string',
  business: 'string',
  security: 'string',
  maintenance: 'string',
  training: 'string',
  risk: 'string',
};

export default function useGetTemplateCard() {
  const get = (category: CardCategory): ContentModel => {
    const templates = {
      [CardCategory.FUNCTIONAL]: requirementContent,
      [CardCategory.NON_FUNCTIONAL]: requirementContent,
      [CardCategory.DATA]: dataContent,
      [CardCategory.RISK]: 'risk content',
    };

    const template = templates[category];
    return template;
  };
  return [get];
}
