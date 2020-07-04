import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Input() title = 'Default title';
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
