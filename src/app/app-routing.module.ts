import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityRoutingModule } from './modules/activity/activity-routing.module';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./modules/activity/activity.module').then(m => m.ActivityModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
