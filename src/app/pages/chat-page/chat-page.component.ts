import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  public messageText = '';
  public messageList: any[];
  public user;

  private socket$: WebSocketSubject<any>;

  constructor(private messageService: MessageService, public authService: AuthService) {
    this.socket$ = new WebSocketSubject('ws://localhost:3000/test');

    this.socket$
      .subscribe(
        (message) => console.log('[WS:GET]: ', JSON.stringify(message)),
        (err) => console.error(err),
        () => console.log('[WS:COMPLETED]')
      );
  }

  ngOnInit() {
    this.messageService.getMessageList().subscribe( messageList => this.messageList = messageList );
    this.user = this.authService.currentUser;
  }

  public send() {
    console.log('[SEND]:', this.messageText);
    this.messageService.sendMessage(this.messageText).subscribe(() => {
      this.messageService.getMessageList().subscribe( messageList => this.messageList = messageList );
    });
    this.socket$.next(this.messageText);
    this.messageText = '';
  }

}
