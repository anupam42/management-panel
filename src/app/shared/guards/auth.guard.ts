import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private userAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    console.log('auth guard');
    this.authService.verifyAuthUser.subscribe(userAuthenticated => {
      console.log('auth guard?', userAuthenticated);
      this.userAuthenticated = userAuthenticated;
    });
  }

  /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return !!localStorage['token'];
  } */

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userAuthenticated) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
