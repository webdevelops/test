// Angular
import { Component, OnInit } from '@angular/core';

// App
import { IconList } from 'src/app/core/mock/icon-list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public iconList = IconList;
  constructor() { }
}
