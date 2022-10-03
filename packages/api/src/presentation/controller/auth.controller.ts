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
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class MyAuthGuard extends AuthGuard('google') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    // super.logIn(request);
    console.log(Object.keys(request));
    // request.logout(function (err) {
    //   console.log('done');
    //   console.log({ err });

    //   // if (err) { return next(err); }
    //   // res.redirect('/');
    // });

    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    // return null;
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log({ err, user, info });

    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new Error();
    }
    return user;
  }
}
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  // constructor(private readonly appService: AppService) {}

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  google(@Req() req): string {
    return 'ok';
  }

  @Get('/logout')
  @UseGuards(AuthGuard('google'))
  logout(@Req() req): string {
    console.log('>>>>>logout');
    // console.log(Object.keys(req));
    console.log('>>>>>logout');

    return 'ok';
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  googleSuccess(@Req() req: Request, @Res() res: Response): string {
    // console.log(Object.keys(req));
    res.cookie('canvas-auth', JSON.stringify(req.user));
    res.redirect('http://localhost:5005/#/canvas');
    return 'ok';
  }
}
