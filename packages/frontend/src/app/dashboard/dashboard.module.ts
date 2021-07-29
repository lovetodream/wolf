import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddAppModule } from './add-app/add-app.module';

const routes: Routes = [{ path: ':id', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    AddAppModule,
  ],
})
export class DashboardModule {}
