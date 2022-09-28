import { CardRepo } from '../../4.infra/db/repo/card.repo';
import { Module } from '@nestjs/common';
import { CardController } from 'src/3.presentation/controller/canvas.controller';
import { SaveCard } from 'src/2.app/savecard';

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
  ],
})
export class CardModule {}
