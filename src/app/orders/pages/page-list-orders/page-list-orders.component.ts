import { Component, OnChanges, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit{

  public propParent: string
  
  public collection !: Order[];
  public headers = ['Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State']; 
 
  // injection de la classe ordersService
  constructor(private ordersService : OrdersService) {
    this.propParent = "titre au démarrage"

    //console.log('test')
    // ici on invoque le get collection
    this.ordersService.collection.subscribe((data: Order[])=> {
      console.log(data, "depuis page-list-orders")
      this.collection = data; 
    }); 

  }
  



  ngOnInit(): void {
  }

  public onChangeTitle(){
    this.propParent = "nouveau titre dans onChangeTitle"
  }

}
