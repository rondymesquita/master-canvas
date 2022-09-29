import { IListCard } from './../../1.domain/usecase/isavecard';
import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card, CardCategory } from 'src/1.domain/model/card';
import { ISaveCard } from 'src/1.domain/usecase/isavecard';
import { CardCreateInputDTO } from '../dto/card.create.input.dto';

@Controller('card')
@ApiTags('card')
export class CardController {
  constructor(
    @Inject('ISaveCard') private readonly saveCard: ISaveCard,
    @Inject('IListCard') private readonly listCard: IListCard,
  ) {}

  @Post('/')
  @ApiResponse({
    status: 200,
    // type: CanvasOutputDTO,
  })
  create(@Body() input: CardCreateInputDTO): string[] {
    this.saveCard.handle(input);
    return [];
  }

  @Get('/')
  async list(): Promise<Card[]> {
    return await this.listCard.handle();
  }
}
