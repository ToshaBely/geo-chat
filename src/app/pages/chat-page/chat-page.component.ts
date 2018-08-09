import { Component, OnDestroy, OnInit } from '@angular/core';

import { pluck } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  public messageText = '';
  public messageList: any[] = [];
  public user;

  private socket$: WebSocketSubject<any>;

  constructor(public authService: AuthService) {
    this.socket$ = new WebSocketSubject('ws://localhost:3000/message-socket');
  }

  ngOnInit() {
    this.socket$
      .pipe(
        pluck('data'),
      )
      .subscribe(
        msgList => this.messageList = [...this.messageList, ...msgList],
        err => console.error(err),
        () => console.log('[WS:COMPLETED]')
      );

    this.user = this.authService.currentUser;
  }

  public send() {
    this.socket$.next(this.messageText);
    this.messageText = '';
  }

  ngOnDestroy(): void {
    this.socket$.unsubscribe();
  }

}
