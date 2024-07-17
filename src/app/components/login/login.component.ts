import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsermanagementService } from '../../services/usermanagement.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform!: FormGroup;

   message: string| null = null;

  constructor(private formbuilder: FormBuilder, private router: Router, private usermg: UsermanagementService, private back:GobackService) {
    this.validateform();
  }

  
  validateform(): void {
    this.loginform = this.formbuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  get email(){
    return this.loginform.controls['email']
  }
  get password(){
    return this.loginform.controls['password']
  }
  loginuser() {
    this.usermg.login(this.loginform.controls['email'].value, this.loginform.controls['password'].value).subscribe(
      response => {
        sessionStorage.setItem('email', response.user.email);
        if (response.user.usertype === 'student') {
          this.router.navigate(['/student']);
        } else if (response.user.usertype === 'lecturer') {
          this.router.navigate(['/teacher/dashboard']);
        } else if (response.user.usertype === 'admin') {
          this.router.navigate(['/admin']);
        }
      },
      error => {
        this.message = "Login attempt failed. Check your credentials."
        console.error(error);
      }
    );
  }

  clearalert(){
    this.message = null;
  }

  goback(){
    this.back.goback()
  }
}
