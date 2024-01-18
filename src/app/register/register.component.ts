import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {User, UserService} from '../user.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,RouterLink,LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  router: any;
  // constructor(private router:Router){}
  redirectTologin(){
    this.router.navigate(['/login']);
  }
 constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.userService.register(user);
      // You can optionally navigate to the login page or perform other actions after registration
    }
  }
}



