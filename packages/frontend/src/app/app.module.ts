import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from '@wolf/ui';

import { AppComponent } from './app.component';
import { GraphqlModule } from './graphql/graphql.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'dashboard',
          loadChildren: () =>
            import('./dashboard/dashboard.module').then(
              (m) => m.DashboardModule
            ),
        },
        {
          path: 'projects',
          loadChildren: () =>
            import('./project/project.module').then((m) => m.ProjectModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    UiModule,
    HttpClientModule,
    GraphqlModule,
    FontAwesomeModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
