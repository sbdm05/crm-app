import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  // public item!: Order
  public item$ !: Observable<Order>;

  constructor(
    private orderservice : OrdersService,
    private router : Router,
    private activatedRoute: ActivatedRoute
    ) {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id)
    this.item$ = this.orderservice.getItemId(id);
    }

  ngOnInit(): void {
  }

  public action(item: Order){
    console.log(item);
    // update de class orderservice
    // http client put
    this.orderservice.update(item).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['orders']);
    })
  }

}
