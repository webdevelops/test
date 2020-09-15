import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { UsersComponent } from './dashboard-page/users/users.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },  
  // {path: 'dashboard', loadChildren: () => import('./')}
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'dashboard/users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
