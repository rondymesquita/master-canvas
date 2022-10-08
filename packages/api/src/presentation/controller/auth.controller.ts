import { User } from './../../domain/model/user';
import { IFindOrSaveUser } from './../../domain/usecase/user';
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
  Inject,
  Session,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { COOKIE_NAME } from '../../config/constants';
import { LoginGuard } from '../../infra/guard/login.guard';
import { LogoutGuard } from '../../infra/guard/logout.guard';
import * as session from 'express-session';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    @Inject('IFindOrSaveUser') private readonly findUseOrSave: IFindOrSaveUser,
  ) {}

  @Get('/google')
  @UseGuards(LoginGuard)
  google(): string {
    return 'ok';
  }

  @Get('/logout')
  @UseGuards(LogoutGuard)
  logout(@Req() req: Request, @Res() res: Response): string {
    // return new Promise((resolve) => {
    // req.logOut({ keepSessionInfo: false }, () => {
    // req.session.destroy((err) => {
    // if (err) throw err;
    res.clearCookie(COOKIE_NAME);
    res.redirect(Env().CLIENT_HOST);

    return 'ok';
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleSuccess(
    @Req() req: Request,
    @Res({ passthrough: false }) res: Response,
  ): Promise<string> {
    const { user } = req;
    const session: any = req.session as unknown;

    const savedUser = await this.findUseOrSave.handle(user as User);
    // console.log('googleSuccesscontroller', { user, savedUser });

    res.cookie(COOKIE_NAME, JSON.stringify(savedUser));
    res.redirect(Env().CLIENT_HOST);
    return 'ok';

    // return new Promise((resolve, reject) => {
    //   req.login(JSON.stringify(savedUser), (err) => {
    //     if (err) reject(err);

    //     session.user = savedUser;
    //     session.save();
    //     console.log('Okay!');
    //     resolve('ok');

    //     res.redirect(Env().CLIENT_HOST);
    //   });
    // });
  }
}
