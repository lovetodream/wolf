import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from '@wolf/schemas';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>
  ) {}

  async findAll(): Promise<ProjectDocument[]> {
    return this.projectModel.find();
  }

  async create(): Promise<ProjectDocument> {
    const project = new Project();
    project.name = 'test';
    return this.projectModel.create(project);
  }
}
