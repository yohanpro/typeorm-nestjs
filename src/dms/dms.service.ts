import { Injectable } from '@nestjs/common';

@Injectable()
export class DmsService {
  postChat(data) {
    return 'Post chattt!,' + data;
  }
}
