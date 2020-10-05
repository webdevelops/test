import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserService {
  private currentUserSubject = new Subject();
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
}