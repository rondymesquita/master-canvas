import { Body, ConsoleLogger, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import PassportGoogle from 'passport-google-oauth20';
import passport from 'passport';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  // constructor(private readonly appService: AppService) {}

  @Get('google/success')
  googleSuccess(@Body() input: any): string {
    console.log('> done', input);
    return 'ok';
  }

  @Post('/authenticate')
  authenticate(): string {
    const GoogleStrategy = PassportGoogle.Strategy;
    console.log(GoogleStrategy);

    passport.use(
      new GoogleStrategy(
        {
          clientID: '',
          clientSecret: '',
          callbackURL: 'http://localhost:3001/auth/google/success',
        },
        function (accessToken, refreshToken, profile, cb) {
          console.log({ accessToken, refreshToken, profile });

          cb(null, {});
          // User.findOrCreate({ googleId: profile.id }, function (err, user) {
          //   return cb(err, user);
          // });
        },
      ),
    );

    return 'ok';
    // return this.appService.getHello();
  }
}
