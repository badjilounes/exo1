import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/api/services';
import { CreateUserDto } from 'src/app/api/models';
import { RoleEnum } from 'src/app/enum/role.enum';
import { GenderEnum } from 'src/app/enum/gender.enum';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  roles: string[] = Object.keys(RoleEnum).filter((v) => isNaN(+v));
  genders: string[] = Object.keys(GenderEnum).filter((v) => isNaN(+v));

  hide = true;

  form: FormGroup;
  snackConfig: MatSnackBarConfig = {duration: 500};

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) { 
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signup(): void {
    if (this.form.valid) {
      const userToCreate: CreateUserDto = {
        email: this.form.value.email,
        password: this.form.value.password,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        address: this.form.value.address,
        role: this.form.value.role,
        gender: this.form.value.gender
      };
      this.authService.putAuthSignup(userToCreate).toPromise().then(
        () => {
          this.snackBar.open('Votre utilisateur a été créé', 'OK', this.snackConfig);
          this.router.navigate(['login']);
        }, 
        error => this.snackBar.open(error.error.message, 'OK', this.snackConfig)
      );
    } else {
      this.snackBar.open('Renseigner les champs sans erreur.', 'OK', this.snackConfig);
    }
  }

}
