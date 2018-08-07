import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public getMessageList(): Observable<any> {
    return this.http.get('/api/messages')
      .pipe(
        tap(res => console.log('from service tap: ', res)),
        catchError(error => {
          console.log(error);
          return of( [{text: 'text from error'}] );
        })
      )
  }

  public sendMessage(message: string): Observable<any> {
    return this.http.post('/api/messages', {message});
  }
}
