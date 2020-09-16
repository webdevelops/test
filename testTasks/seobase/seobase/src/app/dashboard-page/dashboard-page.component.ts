import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const links = [
  { path: 'account', icon: 'settings', title: 'Account info' },
  { path: 'users', icon: 'supervisor_account', title: 'Users' },
  { path: 'subscripion', icon: 'sentiment_satisfied_alt', title: 'Subscripion' },
  { path: 'billing', icon: 'credit_card', title: 'Billing' },
  { path: 'invoices', icon: 'wysiwyg', title: 'Invoices' },
  { path: 'gdpr', icon: 'security', title: 'GDPR' },
  { path: 'logout', icon: 'login', title: 'Log Out' }
];

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  filterNav = links;

  constructor() { }

  ngOnInit(): void {
  }

}
