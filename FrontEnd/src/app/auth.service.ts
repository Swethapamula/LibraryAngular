import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http:HttpClient) { }


  saveUser(signupData:any)
  {
 return this.http.post<any>("http://localhost:3050/signup", {"user":signupData});

  }

  verifyuser(user:any)
  {
    return this.http.post<any>("http://localhost:3050/login",user)

  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

  isAllowed()
  {
    var user=localStorage.getItem("role")
    if (user=='admin')
    { return true}
    else{
      return false
    }
  }

}
