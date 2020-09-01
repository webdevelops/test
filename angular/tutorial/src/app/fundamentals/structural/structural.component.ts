import { Component, OnInit } from '@angular/core';

import {heroes} from './hero';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  heroes = heroes;
  hero = this.heroes[0];
  showSad = true;

  constructor() { }

  ngOnInit(): void {
  }

}
