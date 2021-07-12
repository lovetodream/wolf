import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectDocument } from '@wolf/schemas';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  findAll(): Promise<ProjectDocument[]> {
    return this.projectService.findAll();
  }

  @Post()
  create(@Body() dto: CreateProjectDto): Promise<ProjectDocument> {
    return this.projectService.create(dto);
  }
}
