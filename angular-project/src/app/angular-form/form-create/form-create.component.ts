import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  account: Account;
  formCreate: FormGroup;
  countries: Array<string> = ['Vietnam', 'China', 'Korea', 'Hongkong', 'Thailand'];

  constructor() { }

  validateRePassword(control: AbstractControl) {
    const { root } = control;
    const pass = root.get('password');
    const  rePass = root.get('confirmpassword');

    if (!pass || !rePass) {
      return null;
    }

    const passVal = pass.value;
    const rePassVal = rePass.value;

    const result = passVal === rePassVal ? null : { passDontMatch: true };
    return result;
  }


  ngOnInit(): void {
    this.formCreate = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required, this.validateRePassword]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern('^08+[0-9]d{7}$')])
    });
  }

  createAccount() {
    this.account = this.formCreate.value;
    this.formCreate.reset();
    console.log(this.account);
  }

}
