import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from '@wolf/schemas';
import { AppResolver } from './app.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: App.name, schema: AppSchema }])],
  providers: [AppService, AppResolver],
  controllers: [AppController],
})
export class AppModule {}
