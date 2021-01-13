import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FreelancerListComponent } from './components/freelancer-list/freelancer-list.component';

const routes: Routes = [
  { path: '', component: FreelancerListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }
