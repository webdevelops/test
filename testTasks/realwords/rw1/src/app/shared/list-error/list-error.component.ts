import { Component, Input } from '@angular/core';
import { Errors } from 'src/app/core/models/errors.model';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-error.component.html',
  styleUrls: ['./list-error.component.scss']
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`)
  }

  get errorList() { return this.formattedErrors; }
}
