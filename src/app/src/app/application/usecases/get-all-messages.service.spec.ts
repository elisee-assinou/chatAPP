import { TestBed } from '@angular/core/testing';

import { GetAllMessagesService } from './get-all-messages.service';

describe('GetAllMessagesService', () => {
  let service: GetAllMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
