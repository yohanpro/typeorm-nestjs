import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { JoinRequestDto } from './dto/join.request.dto';
import bcrypt from 'bcrypt';

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
      throw new Error('이미 존재하는 사용자입니다');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
