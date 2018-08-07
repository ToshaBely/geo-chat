import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  public messageText = '';
  public messageList: any[];
  public user;

  constructor(private messageService: MessageService, public authService: AuthService) { }

  ngOnInit() {
    this.messageService.getMessageList().subscribe( messageList => this.messageList = messageList );
    this.user = this.authService.currentUser;
  }

  public send() {
    console.log('[SEND]:', this.messageText);
    this.messageService.sendMessage(this.messageText).subscribe(() => {
      this.messageService.getMessageList().subscribe( messageList => this.messageList = messageList );
    });
    this.messageText = '';
  }

}
