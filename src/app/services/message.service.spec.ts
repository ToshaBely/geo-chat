import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('Message.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
