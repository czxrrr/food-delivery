import {Component, Injectable, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
@Injectable()
export class OrderComponent implements OnInit {

  constructor(private data:DataService) { }
  orders;
  ngOnInit() {
    this.data.getOrders().subscribe(next=>{
      this.orders=next;
    });
  }

}
