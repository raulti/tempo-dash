import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'quake',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [   
      {
        path: 'quake',
        loadChildren: './quake/quake.module#QuakeModule'
    }
  ]}, 
    { 
      path: '**',
      redirectTo: 'quake'
    }
];
