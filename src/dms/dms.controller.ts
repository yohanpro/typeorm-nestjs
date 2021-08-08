import { Body, Get, Param, Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DmsService } from './dms.service';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}
  @Get(':id/chats')
  getChat(@Query('perPage') query, @Param() param) {
    console.log('query: ', query);
    console.log('Parma: ', param);
  }

  @Post(':id/chats')
  postChat(@Body() body) {
    return this.dmsService.postChat(body);
  }
}
