import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public currentUser = {id: '1'};

  constructor() { }
}
