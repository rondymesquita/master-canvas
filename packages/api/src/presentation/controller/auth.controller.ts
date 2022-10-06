import { Env } from '../../config/env';
import {
  Body,
  CanActivate,
  ConsoleLogger,
  Controller,
  ExecutionContext,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  Injectable,
  Session,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { COOKIE_NAME } from '../../config/constants';
import { LoginGuard } from '../../infra/guard/login.guard';
import { LogoutGuard } from '../../infra/guard/logout.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @Get('/google')
  @UseGuards(LoginGuard)
  google(): string {
    return 'ok';
  }

  @Get('/logout')
  @UseGuards(LogoutGuard)
  logout(@Req() req: Request, @Res() res: Response): Promise<string> {
    return new Promise((resolve) => {
      req.logOut({ keepSessionInfo: false }, () => {
        req.session.destroy((err) => {
          if (err) throw err;
          res.clearCookie(COOKIE_NAME);
          resolve('ok');
          res.redirect(Env().CLIENT_HOST);
        });
      });
    });
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleSuccess(
    @Req() req: Request,
    @Res({ passthrough: false }) res: Response,
  ): Promise<string> {
    const { user } = req;
    const session: any = req.session as unknown;

    session.user = user;
    session.save();
    res.redirect(Env().CLIENT_HOST);
    return 'ok';
  }
}