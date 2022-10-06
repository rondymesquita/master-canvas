import { ExecutionContext, Injectable } from '@nestjs/common';
@Injectable()
export class AuthGuard {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    console.log(Object.keys(request));
    console.log(request.session);

    if (request.session) {
      return true;
    } else {
      response.redirect('http://localhost:5005/#/login');
      // return false
    }

    // return false;
  }
}
