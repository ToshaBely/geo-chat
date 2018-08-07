import { Component, Input } from '@angular/core';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
  @Input() public messageList: any = [];

  constructor(private messageService: MessageService) {}
}
