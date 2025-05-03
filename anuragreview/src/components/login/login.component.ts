import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginSuccess = false;
  loading: string = '';
  loginAttempted = false;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginAttempted = false;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = 'loading...';
    (document.activeElement as HTMLElement)?.blur();
    this.loginService.loginRequest(this.loginForm.value).pipe(
      finalize(() =>
        setTimeout(() => {
          this.loginAttempted = true;
        }, 1000)
      )
    ).subscribe({
      next: x =>
        setTimeout(() => {
          if (x.success) {
            this.loginSuccess
          }
          this.submitted = false;
          this.loading = "";
        }, 1000)
      ,
      error: e =>
        setTimeout(() => {
          this.loginSuccess = false;
          console.log('error: ', e);
          this.submitted = false;
          this.loading = "";
        }, 1000)
    });
  }
}
