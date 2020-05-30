import {EmailSearchComponent} from './email-search/email-search.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuardService as AuthGuard} from './auth/guard.service';
import {UploadComponent} from './upload/upload.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'email-search',
    component: EmailSearchComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
