import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSecret(): string {
    return '아놔' + process.env.SECRET;
  }
}
