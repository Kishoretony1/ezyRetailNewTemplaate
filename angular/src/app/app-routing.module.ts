// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics/dash-analytics.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'zones-beacons',
        loadChildren: () => import('./demo/zones-beacons/zones-beacons.module').then((m) => m.ZonesBeaconsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./demo/settings/settings.module').then((m) => m.SettingsModule)
      },
      {
        path: 'logs',
        loadChildren: () => import('./demo/logs/logs.module').then((m) => m.LogsModule)
      },
      {
        path: 'ai',
        loadChildren: () => import('./demo/ai/ai.module').then((m) => m.AiModule)
      },
      {
        path: 'devices',
        loadChildren: () => import('./demo/devices/devices.module').then((m) => m.DevicesModule)
      },
      {
        path: 'feedback',
        loadChildren: () => import('./demo/feedback/feedback.module').then((m) => m.FeedbackModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./demo/employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: 'advertisement',
        loadChildren: () => import('./demo/advertisement/advertisement.module').then((m) => m.AdvertisementModule)
      },
      {
        path: 'userManagement',
        loadChildren: () => import('./demo/user-management/user-management.module').then((m) => m.UserManagementModule)
      },
      {
        path: 'salesReport',
        loadChildren: () => import('./demo/sales-report/sales-report.module').then((m) => m.SalesReportModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart & map/core-apex/core-apex.component')
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms & tables/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/forms & tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [

      {
        path: '',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
