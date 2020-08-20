import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { env } from 'process';
import { filter } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

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
  });

  navStart: Observable<NavigationStart>;

  nameChangeLog: string[] = [];
  heroForm: FormGroup;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.navStart = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;

    this.navStart.subscribe(evt => console.log('Navigation Started!'));

  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => console.log('The URL is changed to: ' + url));
    this.logNameChange();
  }

  toggle() {
    this.visible = !this.visible;

    if (this.visible) {
      this.open.emit(null);
    
    } else {
      this.close.emit(null);
    }
  }

  logNameChange() {
    const nameControl = this.heroForm.get('name');

    nameControl.valueChanges.forEach((value: string) => {
      this.nameChangeLog.push(value);
    });
  }

}
