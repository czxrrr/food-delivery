import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {passBoolean} from 'protractor/built/util';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit {

  constructor(private data:DataService, private cookie: CookieService, private router:Router) { }
  email="";
  password="";
  password1="";
  warning="";
  login_res;
  userName;
  phone;
  user_login;
  hide=true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

  passwordIllegal(): Boolean{
    console.log(this.password1===this.password);
    return !(this.password1===this.password);
  }
  register(){
    this.data.register(this.email,this.password,this.userName, this.phone).subscribe(
      data => {
        if (data.auth===true){
          this.login_res=data;
          this.user_login= 'true';
          this.warning="";
          this.cookie.set('user_login','true');
          this.cookie.set('token',data.token);
          this.data.setUserstatus('true');
          this.router.navigateByUrl('/');
        }
        else{
          this.warning="Register Fail";
        }

      },
      error => {
        this.warning="Register Fail";
      });
  }

}


