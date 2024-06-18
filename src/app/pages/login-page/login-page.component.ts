import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{
  constructor() {

  }
  authService=inject(AuthService)

  public form = new FormGroup({
    username:new FormControl<string>("", [Validators.required]),
    password: new FormControl<string>("", [Validators.required])
  })
  onSubmit(){
    console.log(this.form.value);
    console.log(this.form.valid);
    const formValue = this.form.value;
    const username = formValue.username;
    const password = formValue.password;
    if (this.form.valid && username && password ){
      this.authService.log in({username, password}).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // Handle successful login here (e.g., navigate to another page)
        },
        error: (error) => {
          console.error('Login failed:', error);
          // Handle login error here (e.g., show an error message)
        }
      })
    }
  }
}
