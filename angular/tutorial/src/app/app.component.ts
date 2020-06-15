import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  number = 49;
  obj = { a: 1, b: { c: 2 } };
  img = 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png';
  eventValue = '';
  titleValue = '';
  backgroundToggle = false;

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over');
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
    // }, 5000);
  }

  // onInput(event?: any) {
  //   console.log(event);
  //   this.eventValue = event.target.value;
  // }

  // onInput(event: KeyboardEvent) {
  //   this.eventValue = (<HTMLInputElement>event.target).value;
  // }

  onInput(event) {
    this.titleValue = event.target.value;
  }
 
  onClick() {
    console.log('Click');
  }

  onBlur(str: string) {
    this.eventValue = str;
  }
}   
