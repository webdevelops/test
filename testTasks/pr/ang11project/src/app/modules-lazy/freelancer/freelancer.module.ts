import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerComponent } from './components/freelancer/freelancer.component';
import { FreelancerListComponent } from './components/freelancer-list/freelancer-list.component';
import { SearchModule } from '@app/shared/components/search/search.component';
import { FreelancerRoutingModule } from './freelancer-routing.module';
import { LibsModule } from '@app/shared/libs/libs.module';
import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';

@NgModule({
  declarations: [FreelancerComponent, FreelancerListComponent],
  imports: [
    CommonModule,
    FreelancerRoutingModule,
    SearchModule,
    LibsModule
  ],
  providers: [
    FreelancerHttpService
  ]})
export class FreelancerModule { }
