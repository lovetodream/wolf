import { Args, Query, Resolver } from '@nestjs/graphql';
import { App } from '@wolf/schemas';
import { AppService } from './app.service';

@Resolver(() => App)
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => App)
  async app(@Args('id', { type: () => String }) id: string): Promise<App> {
    return this.appService.findOne(id);
  }
}
