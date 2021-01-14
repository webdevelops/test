import { NgModule } from '@angular/core';
import { MaterialModule } from '@app-shared/libs/material/material.module';
import { CustomFlexLayoutModule } from './custom-flex-layout/custom-flex-layout.module';

const COMMON_LIST = [
  MaterialModule,
  CustomFlexLayoutModule
];

@NgModule({
  imports: COMMON_LIST,
  exports: COMMON_LIST,
})
export class LibsModule {}
