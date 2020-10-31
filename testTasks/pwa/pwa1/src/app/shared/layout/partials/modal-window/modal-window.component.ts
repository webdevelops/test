import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  exportAs: 'modal',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log("CartWindowComponent -> iconList")
  }

}
