import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faBrowser,
  faBug,
  faCode,
  faLightbulbOn,
  faPlus,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faAndroid,
  faApple,
  faGithub,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { ModalService } from '../modal/modal.service';
import { AddAppComponent } from './add-app/add-app.component';

@Component({
  selector: 'wolf-dashboard',
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0%)' }),
        animate(
          '100ms',
          style({
            opacity: 1,
            transform: 'scale(100%)',
          })
        ),
      ]),
      transition(':leave', [
        animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  projectId?: string;

  faPlus = faPlus;
  faBug = faBug;
  faLightbulbOn = faLightbulbOn;
  faGithub = faGithub;
  faApple = faApple;
  faAndroid = faAndroid;
  faBrowser = faBrowser;
  faJs = faJs;
  faCode = faCode;

  showBugHint = false;
  showFeatureHint = false;
  showGithubHint = false;
  showSwiftHint = false;
  showAndroidHint = false;
  showJsHint = false;
  showOtherHint = false;

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService<AddAppComponent>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  async addApp(): Promise<void> {
    const { AddAppComponent } = await import('./add-app/add-app.component');

    await this.modalService.open(AddAppComponent);
  }
}
