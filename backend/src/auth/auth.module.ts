import { RtStrategy } from './strategies/rt.strategy';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AtStrategy } from './strategies/at.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
  ],
  providers: [AuthService,AtStrategy, RtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}