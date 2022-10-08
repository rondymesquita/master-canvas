import { IRemoveCard } from '../../domain/usecase/icard.usecase';
import { IListCard } from '../../domain/usecase/icard.usecase';
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
import { ISaveCard } from 'src/domain/usecase/icard.usecase';
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

  @Get('/:canvasId')
  async list(@Param('canvasId') canvasId: string): Promise<Card[]> {
    console.log({ canvasId });

    return await this.listCard.handle({ canvas: canvasId });
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.removeCard.handle(id);
  }
}
