import { TestBed } from '@angular/core/testing';

import { SendMessageUseCaseService } from './send-message-use-case.service';

describe('SendMessageUseCaseService', () => {
  let service: SendMessageUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMessageUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
