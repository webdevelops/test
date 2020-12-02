import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-window',
  exportAs: 'modal',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  closeModal($event) {
    this.router.navigate([{ outlets: { modal: null } }]);
    this.modalClose.next($event);
  }
}
