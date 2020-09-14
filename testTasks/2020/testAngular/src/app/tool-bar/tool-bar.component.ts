import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    { path: '/about', title: 'About me' },
    { path: '/relationships', title: 'Relationships' },
    { path: '/users', title: 'Users' },
    { path: '/about', title: 'Relationships' },
    { path: '/signup', title: 'Sign Up' }
  ];
  filterMobileNav = [
    { path: '/about', title: 'About me' },
    { path: '/relationships', title: 'Relationships' },
    { path: '/users', title: 'Users' },
    { path: '/about', title: 'Relationships' },
    { path: '/signup', title: 'Sign Up' },
    { path: '/therms', title: 'Therms and Conditions' }
  ];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
