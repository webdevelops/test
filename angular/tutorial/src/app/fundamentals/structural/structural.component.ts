import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  hero = 'Ok';
  showSad = false;
  heroes: {
    one: { name: 'One', emotion: 'happy' },
    two: { name: 'Two', emotion: 'sad' },
    three: { name: 'Three', emotion: 'confused' }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
