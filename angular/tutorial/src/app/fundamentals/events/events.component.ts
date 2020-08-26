import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  clickMessage = '';
  value = '';
  keyValue = '';
  enterValue = '';
  updateValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey(event: KeyboardEvent) {
    this.value += (event.target as HTMLInputElement).value + ' | ';
    // this.value += event.key + ' | ';
  }

  onKeyup(value: string) {
    this.keyValue += value + ' | '
  }

  onEnter(value: string) {
    this.enterValue = value;
  }

  update(value) {
    this.updateValue = value;
  }
}
