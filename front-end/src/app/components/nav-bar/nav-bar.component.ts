import {Component, Injectable, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
@Injectable()
export class NavBarComponent implements OnInit {

  constructor(private cookie:CookieService, private router:Router, private data:DataService) {
    this.data.user_login$.subscribe(data => {
      this.user_login=data;
    });
  }
  user_login='false';
  token;
  ngOnInit() {
    this.user_login=this.cookie.get('user_login');
    this.data.setUserstatus(this.user_login);
    this.token=this.cookie.get('token');
  }
  logout(){
    // logout set user_login to 'false' and go to logout success page
      this.cookie.set('user_login','false');
      this.cookie.set('token',null);
      this.user_login=this.cookie.get('user_login');
      this.token=this.cookie.get('token');
      this.data.setUserstatus('false');
      this.router.navigateByUrl('/logout');
  }

}
