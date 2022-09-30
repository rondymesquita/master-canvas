import { CanvasListOutputDTO } from './../dto/canvas.list.output.dto';
import { IRemoveCanvas } from './../../domain/usecase/canvas';
import { IListCanvas } from '../../domain/usecase/canvas';
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
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Canvas } from 'src/domain/model/canvas';
import { ISaveCanvas } from 'src/domain/usecase/canvas';
import { CanvasCreateInputDTO } from '../dto/canvas.create.input.dto';

@Controller('canvas')
@ApiTags('canvas')
export class CanvasController {
  constructor(
    @Inject('ISaveCanvas') private readonly saveCanvas: ISaveCanvas,
    @Inject('IListCanvas') private readonly listCanvas: IListCanvas,
    @Inject('IRemoveCanvas') private readonly removeCanvas: IRemoveCanvas,
  ) {}

  @Post('/')
  @ApiResponse({
    status: 201,
  })
  async save(@Body() input: CanvasCreateInputDTO): Promise<Canvas> {
    return await this.saveCanvas.handle(input);
  }

  @Get('/')
  @ApiResponse({
    status: 201,
  })
  async list(): Promise<Canvas[]> {
    return await this.listCanvas.handle();
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.removeCanvas.handle(id);
  }
}
