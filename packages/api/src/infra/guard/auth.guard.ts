import { COOKIE_NAME } from './../../config/constants';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends PassportAuthGuard('google') {
  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const cookie = request.cookies[COOKIE_NAME];
    if (cookie) {
      return true;
    } else {
      // response.redirect('http://localhost:5005/#/login');
      return false;
    }

    // const can = await super.canActivate(context);
    // console.log({ can });

    // if (can) {
    //   const request = context.switchToHttp().getRequest();
    //   super.logIn(request);
    // }

    // return true;
  }
}
