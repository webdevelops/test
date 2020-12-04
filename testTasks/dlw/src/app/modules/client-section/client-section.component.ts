import { Component, OnInit } from '@angular/core';

import { ClientServiceInterface } from 'src/app/core/models/client-service';
import { clientServiceData } from 'src/app/core/mock/client-data';

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent implements OnInit {
  public textArray: Array<ClientServiceInterface> = clientServiceData;

  constructor() { }

  ngOnInit(): void {
  }

}
