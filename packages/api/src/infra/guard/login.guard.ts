import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Env } from 'src/config/env';

@Injectable()
export class LoginGuard extends AuthGuard('google') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    console.log('LoginGuard', request.session);
    const session: any = request.session;
    if (session.user) {
      response.redirect(Env().CLIENT_HOST);
      return;
    }
    return super.canActivate(context);
  }
}
