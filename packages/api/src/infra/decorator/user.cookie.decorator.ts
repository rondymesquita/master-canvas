import { User } from './../../domain/model/user';
import { COOKIE_NAME } from './../../config/constants';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const UserCookie = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request: Request = ctx.switchToHttp().getRequest();
    const cookie = request.cookies[COOKIE_NAME];
    const user: User = JSON.parse(cookie);
    return user;
  },
);
