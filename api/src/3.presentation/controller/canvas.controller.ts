import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardCategory, ISaveCard } from 'src/1.domain/usecase/isavecard';

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
      content: '<h1>asdlkajsd</h1>',
      description: 'descricao',
      category: CardCategory.DATA,
    });
    return [];
  }
}
