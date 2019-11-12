import { TestBed } from '@angular/core/testing';

import { ClientAuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientAuthService = TestBed.get(ClientAuthService);
    expect(service).toBeTruthy();
  });
});
