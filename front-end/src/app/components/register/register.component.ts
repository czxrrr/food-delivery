import {Component, Inject, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(@Inject('data') private data, private cookie: CookieService, private router:Router) { }
  email="";
  password="";
  warning="";
  login_res;
  user_login;
  hide=true;

  ngOnInit() {
  }
  onKey_email(value){
    this.email=value;
  }
  onKey_password(value){
    this.password=value;
  }
  register(){
    this.data.register(this.email,this.password).subscribe(
      data => {
        console.log(data);
        if (data.auth===true){
          this.login_res=data;
          this.user_login= 'true';
          this.warning="";
          this.cookie.set('user_login','true');
          this.cookie.set('token',data.token);
          this.router.navigateByUrl('');
        }
        else{
          console.log(data);
          this.warning="Register Fail";
        }

      },
      error => {
        console.log(error);
        this.warning="Register Fail";
      });
  }

}
