import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  public messageText: string = '';
  public messageList: any[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessageList().subscribe( messageList => this.messageList = messageList );
  }

  public send() {
    console.log('[SEND]:', this.messageText);
    this.messageService.sendMessage(this.messageText).subscribe(() => {
      this.messageService.getMessageList().subscribe( messageList => this.messageList = messageList );
    });
    this.messageText = '';
  }

}
