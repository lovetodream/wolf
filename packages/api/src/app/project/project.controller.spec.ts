import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Project, ProjectDocument, ProjectSchema } from '../schemas/project.schema';
import { rootMongooseTestModule } from '../test.utils';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

describe('ProjectController', () => {
  let controller: ProjectController;
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])
      ],
      controllers: [ProjectController],
      providers: [ProjectService],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    const result: ProjectDocument[] = [];
    jest.spyOn(service, 'findAll').mockImplementation(async () => result);
    expect(controller).toBeDefined();
  });
});
