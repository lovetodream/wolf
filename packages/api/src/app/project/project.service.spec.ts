import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import {
  closeInMongodbConnection,
  rootMongooseTestModule,
} from '../test.utils';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '@wolf/schemas';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: Project.name, schema: ProjectSchema },
        ]),
      ],
      providers: [ProjectService],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  afterAll(async () => {
    await closeInMongodbConnection();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a empty list of projects', async () => {
      const projects = await service.findAll();
      expect(projects).toHaveLength(0);
    });

    it('should return a list with two projects', async () => {
      await service.create();
      await service.create();
      const projects = await service.findAll();
      expect(projects).toHaveLength(2);
    });
  });
});
