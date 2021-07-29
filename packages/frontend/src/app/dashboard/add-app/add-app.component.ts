import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'wolf-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss'],
})
export class AddAppComponent {
  @ViewChild('modal') modal?: ModalComponent<AddAppComponent>;

  async close(): Promise<void> {
    await this.modal?.close();
  }

  async create(): Promise<void> {
    await this.modal?.close();
  }
}
