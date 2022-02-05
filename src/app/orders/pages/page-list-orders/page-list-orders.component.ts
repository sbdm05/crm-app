import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  
  // injection de la classe ordersService
  constructor(private ordersService : OrdersService) {
    console.log('test')
    this.ordersService.collection.subscribe(); 
  }

  ngOnInit(): void {
  }

}
