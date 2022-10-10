import { CardUpdateInputDTO } from './../dto/card.update.input.dto';
import { IRemoveCard, IUpdateCard } from '../../domain/usecase/icard.usecase';
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
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card, CardCategory } from 'src/domain/model/card';
import { ISaveCard } from 'src/domain/usecase/icard.usecase';
import { CardCreateInputDTO } from '../dto/card.create.input.dto';
import { Env } from 'src/config/env';
import { UserCookie } from '../../infra/decorator/user.cookie.decorator';
import { User } from '../../domain/model/user';

@Controller('cards')
@ApiTags('cards')
export class CardController {
  constructor(
    @Inject('ISaveCard') private readonly saveCard: ISaveCard,
    @Inject('IListCard') private readonly listCard: IListCard,
    @Inject('IRemoveCard') private readonly removeCard: IRemoveCard,
    @Inject('IUpdateCard') private readonly updateCard: IUpdateCard,
  ) {}

  @Post('/')
  @ApiResponse({
    status: 201,
  })
  async save(@Body() input: CardCreateInputDTO): Promise<Card> {
    return await this.saveCard.handle(input);
  }

  @Get('/:canvasId')
  async list(@Param('canvasId') canvasId: string): Promise<Card[]> {
    return await this.listCard.handle({ canvas: canvasId });
  }

  @Put('/')
  @ApiResponse({
    status: 200,
  })
  async update(
    @Body() input: CardUpdateInputDTO,
    @UserCookie() user: User,
  ): Promise<Card> {
    return await this.updateCard.handle(input);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.removeCard.handle(id);
  }
}
