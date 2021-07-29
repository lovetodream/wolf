import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAppComponent } from './add-app.component';
import { ModalModule } from '../../modal/modal.module';

@NgModule({
  declarations: [AddAppComponent],
  imports: [CommonModule, ModalModule],
})
export class AddAppModule {}
