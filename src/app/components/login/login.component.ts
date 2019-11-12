import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/services';
import { CheckCredentialDto, TokenDto } from 'src/app/api/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cookie, CookieService } from '@ngx-toolkit/cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder, 
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly cookieSrv: CookieService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  ngOnInit() {
  }

  login(): void {
    const credentials: CheckCredentialDto = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService.postAuthLogin(credentials).toPromise().then(
      (token: TokenDto) => {
        this.cookieSrv.setItem('token', token.access_token);
        this.router.navigate(['home']);
      }, 
      error => console.log(error)
    );
  }

}
