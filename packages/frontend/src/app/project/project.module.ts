import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateModule } from './create/create.module';

const routes: Routes = [{ path: '', component: ProjectComponent }];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    CreateModule,
  ],
})
export class ProjectModule {}
