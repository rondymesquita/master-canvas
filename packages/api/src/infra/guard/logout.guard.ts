import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export class LogoutGuard {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (request.session) {
      return true;
    }
  }
}
