import { Controller, Get, Post } from '@nestjs/common';
import { ProjectDocument } from '../schemas/project.schema';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  findAll(): Promise<ProjectDocument[]> {
    return this.projectService.findAll();
  }

  @Post()
  create(): Promise<ProjectDocument> {
    return this.projectService.create();
  }
}
