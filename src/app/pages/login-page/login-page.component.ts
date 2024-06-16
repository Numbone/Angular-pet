import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public form = new FormGroup({
    username:new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
  onSubmit(){
    console.log(this.form.value)
  }
}
