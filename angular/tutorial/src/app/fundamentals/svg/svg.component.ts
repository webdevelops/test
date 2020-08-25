import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {
  fillColor = 'rgb(255, 0, 0)';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

}
