import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GreetingSectionComponent } from './greeting-section/greeting-section.component'
import { ClientSectionComponent } from './client-section/client-section.component';
import { SharedModule } from '../shared/shared.module';
import { TeamSkillSectionComponent } from './team-skill-section/team-skill-section.component';
import { TechnologySectionComponent } from './technology-section/technology-section.component';
import { AvailableServicesSectionComponent } from './available-services-section/available-services-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';

@NgModule({
  declarations: [
    GreetingSectionComponent,
    TeamSkillSectionComponent,
    TechnologySectionComponent,
    AvailableServicesSectionComponent,
    PortfolioSectionComponent,
    ClientSectionComponent,
    ContactUsSectionComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GreetingSectionComponent,
    TeamSkillSectionComponent,
    TechnologySectionComponent,
    AvailableServicesSectionComponent,
    PortfolioSectionComponent,
    ClientSectionComponent,
    ContactUsSectionComponent
  ]
})
export class ModulesModule { }