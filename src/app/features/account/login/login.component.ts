import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onEnterLogin(event) {
    event.preventDefault();
    if (event.charCode === 13) {
      this.submit();
    }
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    this.router.navigate(['/app']);
  }
}
