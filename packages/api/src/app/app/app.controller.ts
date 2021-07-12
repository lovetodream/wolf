import { Body, Controller, Post } from '@nestjs/common';
import { App } from '@wolf/schemas';
import { AppService } from './app.service';
import { CreateAppDto } from './dto/createAppDto';

@Controller('app')
export class AppController {
  constructor(private appService: AppService) {}

  @Post()
  create(@Body() createAppDto: CreateAppDto): Promise<App> {
    return this.appService.create(createAppDto);
  }
}
