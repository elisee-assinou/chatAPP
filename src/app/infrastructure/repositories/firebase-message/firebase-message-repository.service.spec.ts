import { TestBed } from '@angular/core/testing';

import { FirebaseMessageRepositoryService } from './firebase-message-repository.service';

describe('FirebaseMessageRepositoryService', () => {
  let service: FirebaseMessageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseMessageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
