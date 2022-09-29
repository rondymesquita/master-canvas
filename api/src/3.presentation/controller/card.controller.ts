import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardCategory } from 'src/1.domain/model/card';
import { ISaveCard } from 'src/1.domain/usecase/isavecard';

@Controller('card')
@ApiTags('card')
export class CardController {
  constructor(@Inject('ISaveCard') private readonly saveCard: ISaveCard) {}

  @Post('/')
  @ApiResponse({
    status: 200,
    // type: CanvasOutputDTO,
  })
  create(): string[] {
    this.saveCard.handle({
      title: 'fulano',
      content: {
        persona: 'string',
        business: 'string',
        acceptance: 'string',
        data: 'string',
        infra: 'string',
        risk: 'string',
      },
      category: CardCategory.REQUIREMENT,
    });
    return [];
  }
}
