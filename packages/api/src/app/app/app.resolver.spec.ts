import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { App, AppSchema } from '@wolf/schemas';
import { AppService } from './app.service';
import { rootMongooseTestModule } from '../test.utils';
import { AppResolver } from './app.resolver';

describe('AppResolver', () => {
  let resolver: AppResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: App.name, schema: AppSchema }]),
      ],
      providers: [AppResolver, AppService],
    }).compile();

    resolver = module.get<AppResolver>(AppResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
