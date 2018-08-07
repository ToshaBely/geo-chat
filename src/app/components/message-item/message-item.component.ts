import { Component, Input } from '@angular/core';

import { Message } from '../../models/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent {
  @Input() public message: Message;
  @Input() public isMyMessage: boolean;
}
