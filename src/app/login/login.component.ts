import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username_error = false;
  password_error = false;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      alert("hello")
    }
    if(this.loginForm.value.username != 'admin'){
      this.username_error = true;
    }
    if(this.loginForm.value.password != 'admin'){
      this.password_error = true;
    }

  }

  getFormControl(name: any) {
    return this.loginForm.controls[name];
  }
}