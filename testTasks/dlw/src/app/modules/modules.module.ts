import { NgModule } from "@angular/core";

import { GreetingSectionComponent } from './greeting-section/greeting-section.component'
import { ClientSectionComponent } from './client-section/client-section.component';

@NgModule({
  declarations: [
    ClientSectionComponent,
    GreetingSectionComponent
  ],
  exports: [
    ClientSectionComponent,
    GreetingSectionComponent
  ]
})
export class ModulesModule { }