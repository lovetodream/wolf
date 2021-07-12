import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { AppModule as ProjectAppModule } from './app/app.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(environment.mongodb, {
      dbName: 'wolf',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
    ProjectModule,
    ProjectAppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
