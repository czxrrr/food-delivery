import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private cookie:CookieService,private data:DataService) { }

  user;
  ngOnInit() {
    this.data.getUserInfo().subscribe(next=> {
      this.user=next;
    }, err => {
      console.log(err);
      this.user=null;
    });
  }

}
