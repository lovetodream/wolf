import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './create.component';
import { ModalModule } from '../../modal/modal.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ModalModule, ReactiveFormsModule],
})
export class CreateModule {}
