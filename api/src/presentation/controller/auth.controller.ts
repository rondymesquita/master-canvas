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
          clientID:
            '379745623793-kobbcm209l1fdu6gfqj9emi7gc1oqcnj.apps.googleusercontent.com',
          clientSecret: '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',
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
