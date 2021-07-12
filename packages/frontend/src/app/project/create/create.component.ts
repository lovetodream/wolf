import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateProjectGQL } from '../../../generated/graphql';

import { ModalComponent } from '../../modal/modal.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'wolf-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  @ViewChild('modal') modal?: ModalComponent<CreateComponent>;
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    private createProjectGQL: CreateProjectGQL,
    private projectService: ProjectService
  ) {}

  async close(): Promise<void> {
    await this.modal?.close();
  }

  async create(): Promise<void> {
    if (!this.createForm.valid) {
      return;
    }

    this.createProjectGQL
      .mutate({ name: this.createForm.get('name')?.value })
      .subscribe((result) => console.log(result));

    await this.projectService.refetch();

    await this.modal?.close();
  }
}
