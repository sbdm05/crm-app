import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService} from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public item = new Order();

  constructor(
    private OrdersService : OrdersService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  // ici le typage ne sert à rien car après
  public action(item: any){
    console.log(item);
    this.OrdersService.add(item).subscribe()

    // redirection
    this.router.navigate(['orders'])
  }

}
