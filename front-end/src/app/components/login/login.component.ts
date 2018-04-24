import {Component, Inject, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {CookieService} from 'ngx-cookie-service';
import {FormControl,Validators} from "@angular/forms";
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  constructor(private data:DataService, private router:Router, private cookie:CookieService) { }
  hide=true;
  email='';
  password='';
  login_res={};
  warning='';
  user_login='false';



  ngOnInit() {
  }

  login(){
    // use data service to make http call
    this.data.login(this.email,this.password).subscribe(
      data => {
        this.login_res=data;
        this.user_login= 'true';
        this.warning="";
        this.cookie.set('user_login','true');
        this.cookie.set('token',data.token);
        this.data.setUserstatus('true');
        this.router.navigate(['']);
        // login success, go to index page


      },
      error => {
        console.log(error);
        console.log('123');
        this.cookie.set('user_login', 'false');
        this.warning = "Please input correct email and password";
        // show error message when login fails
      });
  }

}


