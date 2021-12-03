import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  signupData={
    uname:"",
    email:"",
    psw:"",
    pswrepeat:""
  }


  constructor(public _router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
  }
  signUp() 
   {
   this._auth.saveUser(this.signupData).subscribe((data)=>{
   console.log(data)
   this._router.navigate(['login']);

   });  

  }

}
