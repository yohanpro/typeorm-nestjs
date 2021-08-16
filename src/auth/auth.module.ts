import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { UsersModule } from 'src/users/users.module';
import { LocalSerializer } from './local.serializer';

@Module({
  imports: [PassportModule.register({ session: true }), TypeOrmModule.forFeature([Users]), UsersModule],
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule { }
