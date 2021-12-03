import { Injectable } from '@angular/core';
import {CanActivate, RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( public _auth:AuthService, public _router:Router){}
  canActivate():boolean{
    if( this._auth.loggedIn())
    {
       return true
    }
    else{
       this._router.navigate(['home']);
       return false;

    }

  }
  
}
