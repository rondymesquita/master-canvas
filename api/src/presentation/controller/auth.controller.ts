import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  // constructor(private readonly appService: AppService) {}

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  google(@Req() req): string {
    return 'ok';
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  googleSuccess(@Req() req): string {
    console.log('redirect ===========');
    console.log(req.user);
    console.log('===========');
    return 'ok';
  }
}
