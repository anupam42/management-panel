import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { TranslateService } from 'src/app/shared/services/translate.service';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userAuthenticated: boolean;
  public loading: boolean;
  public userCredentialsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userCredentialsForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public signUp() { }

  public signIn() {
    this.authService.signIn('sandra@test.com', '123456');
  }

  private isLoading(loading) {
    this.loading = loading;
    if (this.userAuthenticated) {
      this.loading = false;
    }
  }

}
