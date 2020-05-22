import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: "data2-comp",
  template: `<div>
              

              <table>
                <tr *ngFor="let item of items">
                  <td>{{item}}</td>
                </tr>
              </table>
            </div>`,
  providers: [DataService, LogService]
})
export class Data2Component {
  newItem: string;
  items: string[] = [];
  constructor(private dataService: DataService) {}

  addItem(name: string) {
    this.dataService.addData(name);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}