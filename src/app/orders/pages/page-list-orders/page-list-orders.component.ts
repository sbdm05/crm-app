import { Component, OnChanges, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit{

  public propParent: any
  
  // injection de la classe ordersService
  constructor(private ordersService : OrdersService) {
    this.propParent = {name: "titre au démarrage"}
   
    //console.log('test')
    // ici on invoque le get collection
    this.ordersService.collection.subscribe(); 
  }



  ngOnInit(): void {
  }

  public onChangeTitle(){
    this.propParent = {name : "nouveau titre dans onChangeTitle"}
  }

}
