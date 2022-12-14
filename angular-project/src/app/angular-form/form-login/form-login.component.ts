import { Component, OnInit } from '@angular/core';
import {Login} from './Login';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm: Login;
  formLogin: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    this.loginForm = this.formLogin.value;
    this.formLogin.reset();
    console.log(this.loginForm);
  }
}
