import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectQuery } from '../../generated/graphql';
import { faChevronRight, faPlus } from '@fortawesome/pro-regular-svg-icons';
import { ModalService } from '../modal/modal.service';
import { CreateComponent as CCType } from './create/create.component';
import { ProjectService } from './project.service';

@Component({
  selector: 'wolf-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects$!: Observable<ProjectQuery['projects']>;
  faPlus = faPlus;
  faChevronRight = faChevronRight;

  constructor(
    private modalService: ModalService<CCType>,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.projects$;
  }

  async createProject(): Promise<void> {
    const { CreateComponent } = await import('./create/create.component');

    await this.modalService.open(CreateComponent);
  }
}
