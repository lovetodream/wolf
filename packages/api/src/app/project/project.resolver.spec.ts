import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Project, ProjectSchema } from '@wolf/schemas';
import { rootMongooseTestModule } from '../test.utils';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

describe('AppResolver', () => {
  let resolver: ProjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: Project.name, schema: ProjectSchema },
        ]),
      ],
      providers: [ProjectResolver, ProjectService],
    }).compile();

    resolver = module.get<ProjectResolver>(ProjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
