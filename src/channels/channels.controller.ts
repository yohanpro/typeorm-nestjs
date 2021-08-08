import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  allChannels() {}

  @Post()
  createChannels() {}
}
