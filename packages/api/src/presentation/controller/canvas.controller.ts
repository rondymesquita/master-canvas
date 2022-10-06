import { User } from './../../domain/model/user';
import { CanvasListOutputDTO } from './../dto/canvas.list.output.dto';
import { IRemoveCanvas, IUpdateCanvas } from './../../domain/usecase/canvas';
import { IListCanvas } from '../../domain/usecase/canvas';
import {
  Session,
  Body,
  ConsoleLogger,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Param,
  Put,
  ExecutionContext,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Canvas } from '../../domain/model/canvas';
import { ISaveCanvas } from '../../domain/usecase/canvas';
import { CanvasCreateInputDTO } from '../dto/canvas.create.input.dto';
import { AuthGuard } from '../../infra/guard/auth.guard';
import * as session from 'express-session';

@Controller('canvas')
@ApiTags('canvas')
@UseGuards(AuthGuard)
export class CanvasController {
  constructor(
    @Inject('ISaveCanvas') private readonly saveCanvas: ISaveCanvas,
    @Inject('IListCanvas') private readonly listCanvas: IListCanvas,
    @Inject('IRemoveCanvas') private readonly removeCanvas: IRemoveCanvas,
    @Inject('IUpdateCanvas') private readonly updateCanvas: IUpdateCanvas,
  ) {}

  @Get('/')
  @ApiResponse({
    status: 201,
  })
  async list(@Session() session: session.Session): Promise<Canvas[]> {
    const user = (session as any).user as User;
    return await this.listCanvas.handle({ user: user.id });
  }

  @Post('/')
  @ApiResponse({
    status: 201,
  })
  async save(
    @Body() input: CanvasCreateInputDTO,
    @Session() session: session.Session,
  ): Promise<Canvas> {
    const user = (session as any).user as User;

    const canvas: Canvas = {
      ...input,
      user: user.id,
    };
    return await this.saveCanvas.handle(canvas);
  }

  @Put('/')
  @ApiResponse({
    status: 200,
  })
  async update(@Body() input: CanvasCreateInputDTO): Promise<Canvas> {
    console.log({ input });
    return await this.updateCanvas.handle(input);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.removeCanvas.handle(id);
  }
}
