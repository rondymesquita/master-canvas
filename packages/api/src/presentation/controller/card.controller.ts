import { IRemoveCard } from './../../domain/usecase/card';
import { IListCard } from '../../domain/usecase/card';
import {
  Body,
  ConsoleLogger,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Param,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card, CardCategory } from 'src/domain/model/card';
import { ISaveCard } from 'src/domain/usecase/card';
import { CardCreateInputDTO } from '../dto/card.create.input.dto';
import { Env } from 'src/config/env';

@Controller('cards')
@ApiTags('cards')
export class CardController {
  constructor(
    @Inject('ISaveCard') private readonly saveCard: ISaveCard,
    @Inject('IListCard') private readonly listCard: IListCard,
    @Inject('IRemoveCard') private readonly removeCard: IRemoveCard,
  ) {}

  @Post('/')
  @ApiResponse({
    status: 201,
    // type: CanvasOutputDTO,
  })
  async save(@Body() input: CardCreateInputDTO): Promise<Card> {
    return await this.saveCard.handle(input);
    // return [];
  }

  @Get('/')
  async list(): Promise<Card[]> {
    return await this.listCard.handle();
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.removeCard.handle(id);
  }
}
