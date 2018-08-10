import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private currentUser = null;
  private userSubject = new BehaviorSubject(null);

  constructor() { }

  public getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  public login() {
    this.currentUser = {id: '1'};
    this.userSubject.next(this.currentUser);
  }

  public logout() {
    this.currentUser = null;
    this.userSubject.next(this.currentUser);
  }
}
