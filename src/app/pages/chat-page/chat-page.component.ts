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
  public user$;

  private socket$: WebSocketSubject<any>;

  constructor(public authService: AuthService) {}

  public ngOnInit() {
    this.user$ = this.authService.getUser();
    this.createSocket();
  }

  public ngOnDestroy(): void {
    this.socket$.unsubscribe();
  }

  public send() {
    this.socket$.next(this.messageText);
    this.messageText = '';
  }

  private createSocket() {
    const wsProtocol = window.location.protocol.replace('http', 'ws');
    const host = window.location.host;

    this.socket$ = new WebSocketSubject(`${wsProtocol}//${host}/message-socket`);
    this.socket$
      .pipe(
        pluck('data'),
      )
      .subscribe(
        (msgList: any[]) => this.messageList = [...this.messageList, ...msgList],
        err => console.error(err),
        () => console.log('[WS:COMPLETED]')
      );
  }

}
