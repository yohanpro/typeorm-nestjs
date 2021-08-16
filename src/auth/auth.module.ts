import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';

@Module({
  imports: [UsersModule, PassportModule, TypeOrmModule.forFeature([Users])],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
