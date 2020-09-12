// import { NgModule } from '@angular/core';
// import { AboutComponent } from './about.component';
// import { AboutExtraComponent } from '../about-extra/about-extra.component';

// @NgModule({
//   declarations: [
//     AboutComponent,
//     AboutExtraComponent
//   ]
// })
// export class AboutModule {

// }

import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutExtraComponent } from '../about-extra/about-extra.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'about', component: AboutComponent, children: [
          { path: 'extra', component: AboutExtraComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AboutModule {

}