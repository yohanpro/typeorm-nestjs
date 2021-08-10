import { Body, Get, Param, Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DmsService } from './dms.service';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 Param',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 ID',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한번에 가져올 페이지',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
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
