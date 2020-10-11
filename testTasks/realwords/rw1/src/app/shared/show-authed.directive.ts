import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { UserService } from '../core/services/user.service';

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit {

  constructor(
    public userService: UserService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  condition: boolean;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

}
