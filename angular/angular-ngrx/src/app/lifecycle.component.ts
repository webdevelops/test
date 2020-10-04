import {
  Component,
  OnInit,
  OnChanges,
  Input,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
  <h2>Lifecycle</h2>
  <input type="text" [(ngModel)]="name">
  <child-comp [name]="name"></child-comp>
  `
})
export class LifecycleComponent {
  name: string = "Tom";
}


@Component({
  selector: 'child-comp',
  template: `<p>Hello {{name}}`
})
export class ChildComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked {
  @Input() name: string;

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    console.log('------------------');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
}