import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GreetingSectionComponent } from './greeting-section/greeting-section.component'
import { ClientSectionComponent } from './client-section/client-section.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientSectionComponent,
    GreetingSectionComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    ClientSectionComponent,
    GreetingSectionComponent
  ]
})
export class ModulesModule { }