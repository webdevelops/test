// Angular
import { Component} from '@angular/core';

// App
import { IconList } from 'src/app/core/mock/icon-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public iconList = IconList;
  constructor() { }
}
