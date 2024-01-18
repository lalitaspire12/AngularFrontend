import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const isAuthenticated = this.userService.login(username, password);

      if (isAuthenticated) {
        // User is authenticated, perform actions like navigation or storing user state
        console.log('Login successful!');
        this.router.navigate(['/blank']);
      } else {
        // Show error message or handle unsuccessful login
        console.log('Login failed. Invalid username or password.');
      }
    }
  }


}

