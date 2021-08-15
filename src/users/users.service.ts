import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { JoinRequestDto } from './dto/join.request.dto';
import bcrypt from 'bcrypt';
import { HttpException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async postUsers(email: string, password: string, nickname: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    console.log('user', user);
    if (user) {
      throw new UnauthorizedException('이미 있는 유저입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
