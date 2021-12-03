import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user={
   uname:"",
   pwd:""
 }
  constructor(public _auth:AuthService,public _router:Router) { }

  ngOnInit(): void {
  }

 
  loginVerify()
  {
  console.log(this.user);
   this._auth.verifyuser(this.user).subscribe((res)=>{


     if (res.token!==null)
     {
       
     localStorage.setItem("token",res.token);
     localStorage.setItem("role",res.role);
     this._router.navigate(['books-list'])
     }
  
  },
  err => {
    console.log(err);
  }

  
  )
  }

}
