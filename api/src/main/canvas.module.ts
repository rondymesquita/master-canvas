import { CardRepo } from './../infra/db/repo/card.repo';
import { ICardRepo } from './../app/service/repo/icard.repo';
import { Module } from '@nestjs/common';
import { CardController } from 'src/presentation/controller/canvas.controller';
import { SaveCard } from 'src/app/savecard';

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
