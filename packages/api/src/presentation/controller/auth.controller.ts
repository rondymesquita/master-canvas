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
import { Observable } from 'rxjs';
import * as expressSession from 'express-session';
// import { Session } from 'inspector';

@Injectable()
export class LoginGuard extends AuthGuard('google') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    console.log('LoginGuard', request.session);
    const session: any = request.session;
    if (session.user) {
      response.redirect('http://localhost:5005/#/');
      return;
    }
    return super.canActivate(context);
  }
}

export class LogoutGuard {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    // console.log(request.session);
    if (request.session) {
      return true;
    }
    // return super.canActivate(context);
  }
}
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
          res.clearCookie('canvassessionid');
          resolve('ok');
          res.redirect('http://localhost:5005/#/');
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
    // console.log(req.user);
    const { user } = req;
    const session: any = req.session as unknown;

    session.user = user;
    session.save();
    res.redirect('http://localhost:5005/#/login');
    return 'ok';
  }
}
