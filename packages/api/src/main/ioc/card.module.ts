import { CardRepo } from '../../infra/db/repo/card.repo';
import { Module } from '@nestjs/common';
import { CardController } from '../../presentation/controller/card.controller';
import { ListCard, RemoveCard, SaveCard } from '../../app/usecase/card.usecase';

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
    {
      provide: 'IRemoveCard',
      useClass: RemoveCard,
    },
  ],
})
export class CardModule {}
