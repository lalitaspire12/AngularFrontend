import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from './blank/blank.component';

export const routes: Routes = [{ path: 'register', component: RegisterComponent }, { path: 'login', component: LoginComponent },
{ 'path': '', redirectTo: "register", pathMatch: "full" },{path:'blank',component:BlankComponent}];
