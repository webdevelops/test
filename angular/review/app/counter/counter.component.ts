import { Component, OnInit } from '@angular/core';
import { LocalCounterService } from '../services/local-counter.service';
import { AppCounterService } from '../services/app-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [LocalCounterService]
})
export class CounterComponent implements OnInit {

  constructor(
    private appCounterService: AppCounterService,
    private localCounterService: LocalCounterService
  ) { }

  ngOnInit(): void {
  }

}
