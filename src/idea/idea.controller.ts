import { Param } from '@nestjs/common';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  showAllIdeas() {
    return this.ideaService.showAll();
  }

  @Post()
  createIdea(@Body() data: IdeaDTO) {
    return this.ideaService.create(data);
  }

  @Get(':id')
  readIdea(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  updateIdea(@Param('id') id: string, data: IdeaDTO) {
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  destroyIdea(@Param('id') id: string) {
    return this.ideaService.destroy(id);
  }
}
