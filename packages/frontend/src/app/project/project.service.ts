import { Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exact, ProjectGQL, ProjectQuery } from '../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects$!: Observable<ProjectQuery['projects']>;
  projectsQuery!: QueryRef<ProjectQuery, Exact<{ [key: string]: never }>>;

  constructor(private projectGQL: ProjectGQL) {
    this.projectsQuery = this.projectGQL.watch();
    this.projects$ = this.projectsQuery.valueChanges.pipe(
      map((result) => result.data.projects)
    );
  }

  async refetch(): Promise<void> {
    await this.projectsQuery.refetch();
  }
}
