import { Args, Query, Resolver } from '@nestjs/graphql';
import { Project } from '@wolf/schemas';
import { ProjectService } from './project.service';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => Project)
  async project(
    @Args('id', { type: () => String }) id: string
  ): Promise<Project> {
    return this.projectService.findOne(id);
  }
}
