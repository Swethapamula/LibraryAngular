import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title="Global Digital Library";
  constructor(public _router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
  }

 logoutUser()
{
localStorage.removeItem('token');
this._router.navigate(['/login'])
}

}
