// import { Canvas } from 'src/domain/model/canvas';

// export type CanvasCreateInputDTO = Pick<Canvas, 'title'>;
import { ApiProperty } from '@nestjs/swagger';
export class CanvasCreateInputDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  canvasId: string;
}
