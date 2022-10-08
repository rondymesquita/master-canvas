import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
@Injectable()
export class GoogleSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: any, done: CallableFunction) {
    console.log('>>>>serializeUser', typeof user, user);
    done(null, user);
  }

  async deserializeUser(user: any, done: CallableFunction) {
    console.log('>>>>deserializeUser', typeof user, user);
    done(null, user);
  }
}
