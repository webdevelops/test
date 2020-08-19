import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  visible = true;
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()) ,1000);
  })
  
  constructor() {}

  toggle() {
    this.visible = !this.visible;

    if (this.visible) {
      this.open.emit(null);
    
    } else {
      this.close.emit(null);
    }
  }

  ngOnInit(): void {
  }

}
