import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  myWorkSpaces() {}

  @Post()
  createWorkSpaces() {}

  @Get(':url/memebers')
  getAllMembersFromWorkSpaces() {}

  @Post(':url/members')
  inviteMembersToWorkSpaces() {}
}
