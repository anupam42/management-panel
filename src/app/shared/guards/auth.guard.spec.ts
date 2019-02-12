import { TestBed, inject } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src';

import { AuthGuard } from './auth.guard';

describe('Validando se o usuário está autenticado', () => {

  // tslint:disable-next-line:prefer-const
  let route: ActivatedRouteSnapshot;
  // tslint:disable-next-line:prefer-const
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthGuard ]
    });
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('user is authenticated', inject([AuthGuard], (service: AuthGuard) => {
    localStorage.setItem('token', 'test@test');
    expect(service.canActivate(route, state)).toBeTruthy();
  }));

  it('user is not authenticated', inject([AuthGuard], (service: AuthGuard) => {
    expect(service.canActivate(route, state)).toBeFalsy();
  }));

});
