// import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CanvasOutputDTO {
  // @IsUUID()
  // public 'x-session-id': string;

  // public get id(): string {
  //   return this['x-session-id'];
  // }

  public constructor(input: any) {
    Object.assign(this, input);
  }
}
