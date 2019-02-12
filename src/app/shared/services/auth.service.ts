import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticateUser = new BehaviorSubject<boolean>(false);
  public verifyAuthUser = this.authenticateUser.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService,
  ) {
    this.verifySessionExists();
  }

  public signUp(email: string, password: string): boolean {
    return true;
  }

  public signIn(email: string, password: string): boolean {
    if (email === 'test@test.com' && password === '123456') {
      this.storageService.setItemStorage('token', JSON.stringify({ email, password }));
      this.changeLogged(true);
      this.router.navigate(['/home']);
      return true;
    } else {
      this.changeLogged(false);
      return false;
    }
  }

  public signOut(): void { }

  private verifySessionExists() {
    const userDataLocalStorage = this.storageService.getValueFromKeyStorage('token');
    if (userDataLocalStorage) {
      this.changeLogged(true);
      this.router.navigate(['/home']);
    }
  }

  private changeLogged(value): void {
    this.authenticateUser.next(value);
  }
}
