import {Routes} from '@angular/router';
import {KonnektorViewComponent} from '../konnektor/konnektor-view.component';
import {AuditlogComponent} from '../auditlog/auditlog.component';
import {TemplateComponent} from './template.component';

export const navigationRoutes: Routes = [
  {
    path: 'navigation',
    component: TemplateComponent,

    children: [
      {
      path: 'konnektor-view',
      component: KonnektorViewComponent,
      },
      {
        path: "auditlog",
        component: AuditlogComponent
      }
    ]
  }

];