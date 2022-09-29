import { IListCard } from './../../1.domain/usecase/isavecard';
import { CardRepo } from '../../4.infra/db/repo/card.repo';
import { Module } from '@nestjs/common';
import { CardController } from 'src/3.presentation/controller/card.controller';
import { ListCard, SaveCard } from 'src/2.app/usecase/savecard';

@Module({
  imports: [],
  controllers: [CardController],
  providers: [
    {
      provide: 'ICardRepo',
      useClass: CardRepo,
    },
    {
      provide: 'ISaveCard',
      useClass: SaveCard,
    },
    {
      provide: 'IListCard',
      useClass: ListCard,
    },
  ],
})
export class CardModule {}
