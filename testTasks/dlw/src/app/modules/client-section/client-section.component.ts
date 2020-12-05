import { Component, OnInit } from '@angular/core';

import { ClientServiceInterface } from 'src/app/core/models/client-service';
import { clientServiceData } from 'src/app/core/mock/client-data';

export enum Arrows {
  right = 'right',
  left = 'left'
}

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent implements OnInit {
  public tabs: Array<ClientServiceInterface> = clientServiceData;
  public arrow = '../../assets/icon/client-section/right-arrow.svg';
  arrows = Arrows;

  constructor() { }

  ngOnInit(): void {
  }

}
