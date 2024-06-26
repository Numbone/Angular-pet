import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);
  public form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  isPasswordVisible = signal<boolean>(false);

  onSubmit() {
    const formValue = this.form.value;
    const username = formValue.username;
    const password = formValue.password;
    if (this.form.valid && username && password) {
      this.authService.login({username, password}).subscribe({
        next: response => {
          console.log('Login successful:', response);
          // Handle successful login here (e.g., navigate to another page)
          // navigate privateRoute
          this.router.navigate(['']);
        },
        error: error => {
          console.error('Login failed:', error);
          // Handle login error here (e.g., show an error message)
        },
      });
    }
  }
}
