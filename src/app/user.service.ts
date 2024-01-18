import { Injectable } from '@angular/core';
export interface User{
  Username:string;
  Password:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:User[]=[];
  register(user:User):void{
    this.users.push(user);
  }

  login(Username:string,Password:string):boolean{
    const user=this.users.find(u=>u.Username==Username && u.Password==Password);
    return !!user;
  }

  constructor() { }
}
