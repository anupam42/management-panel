import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('user is valid', inject([AuthService], (service: AuthService) => {
    expect(service.signIn('sandra@test.com', '123456')).toBeTruthy();
  }));

  it('user is invalid', inject([AuthService], (service: AuthService) => {
    expect(service.signIn('sandra@fail.com', '123123')).toBeFalsy();
  }));

});
