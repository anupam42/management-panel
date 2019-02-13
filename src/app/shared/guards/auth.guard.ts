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
    this.authService.verifyAuthUser.subscribe(userAuthenticated => {
      this.userAuthenticated = userAuthenticated;
    });
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userAuthenticated) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
