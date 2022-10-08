import { COOKIE_NAME } from './../../config/constants';
import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export class LogoutGuard {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const cookie = request.cookies[COOKIE_NAME];
    if (cookie) {
      return true;
    }
  }
}
