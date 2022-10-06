import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends PassportAuthGuard('google') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    // const response = ctx.getResponse();
    // console.log(Object.keys(request));
    const session: any = request.session;
    // console.log('user auth guard', session);
    if (session.user) {
      return true;
    } else {
      // response.redirect('http://localhost:5005/#/login');
      return false;
    }
  }
}
