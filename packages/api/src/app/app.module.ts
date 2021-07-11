import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(environment.mongodb, {
      dbName: 'wolf',
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
