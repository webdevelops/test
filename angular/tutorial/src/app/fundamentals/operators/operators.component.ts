import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  title = 'Hello Pipe';
  manufacture = {
    title: 'Wonderful',
    date: new Date('01.31.1980'),
    property: null,
    color: 'red'
  };

  manufacture_2: null;

  constructor() { }

  ngOnInit(): void {
  }

}
