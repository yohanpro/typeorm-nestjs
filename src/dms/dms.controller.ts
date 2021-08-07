import { Get, Param, Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query('perPage') query, @Param() param) {
    console.log('query: ', query);
    console.log('Parma: ', param);
  }

  @Post(':id/chats')
  postChat() {}
}
