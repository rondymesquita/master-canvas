import { UserModel } from './../../infra/db/model/user.model';
import { COOKIE_NAME } from './../../config/constants';
import { User } from '../../domain/model/user';
import { CanvasListOutputDTO } from './../dto/canvas.list.output.dto';
import {
  IRemoveCanvas,
  IUpdateCanvas,
} from '../../domain/usecase/icanvas.usecase';
import { IListCanvas } from '../../domain/usecase/icanvas.usecase';
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
  Req,
  ExecutionContext,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Canvas } from '../../domain/model/canvas';
import { ISaveCanvas } from '../../domain/usecase/icanvas.usecase';
import { CanvasCreateInputDTO } from '../dto/canvas.create.input.dto';
import { AuthGuard } from '../../infra/guard/auth.guard';
import * as session from 'express-session';
import { Request } from 'express';
import { UserCookie } from '../../infra/decorator/user.cookie.decorator';
import { CanvasUpdateInputDTO } from '../dto/canvas.update.input.dto';

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
  async list(@UserCookie() user: User): Promise<Canvas[]> {
    return await this.listCanvas.handle({ user: user.id });
  }

  @Post('/')
  @ApiResponse({
    status: 201,
  })
  async save(
    @Body() input: CanvasCreateInputDTO,
    @UserCookie() user: User,
  ): Promise<Canvas> {
    return await this.saveCanvas.handle({ ...input, user: user.id });
  }

  @Put('/')
  @ApiResponse({
    status: 200,
  })
  async update(
    @Body() input: CanvasUpdateInputDTO,
    @UserCookie() user: User,
  ): Promise<Canvas> {
    return await this.updateCanvas.handle({ ...input, user: user.id });
  }

  @Delete('/:id')
  async remove(
    @Param('id') id: string,
    @UserCookie() user: User,
  ): Promise<any> {
    return await this.removeCanvas.handle(id);
  }
}
