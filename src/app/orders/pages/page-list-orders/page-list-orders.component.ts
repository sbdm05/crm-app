import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy{

  public propParent: string

  // nouvel obeservable
  private test= new BehaviorSubject(0);

  // on crée une souscription
  private sub!: Subscription;

  //public collection !: Order[];
  // j'initialise une variable de type Observable
  public collection$!: Observable<Order[]>;


  public headers = ['Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'];

  // injection de la classe ordersService
  constructor(private ordersService : OrdersService) {
    this.propParent = "titre au démarrage"

    //console.log('test')
    // ici on invoque le get collection
    // this.ordersService.collection.subscribe((data: Order[])=> {
    //   console.log(data, "depuis page-list-orders")
    //   this.collection = data;
    // });

    // ici copie par référence de l'observable retourné par http.get
    // mais on ne souscrit pas à l'observable ici, mais dans l'HTML avec un PIPE
    this.collection$ = this.ordersService.collection

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // on souscrit à l'observable à chaque ngOnInit()
    this.sub = this.test.subscribe((data: any) => console.log(data));
  }

  public onChangeTitle(){
    this.propParent = "nouveau titre dans onChangeTitle"
  }

  ngOnDetroy(): void{
    this.sub.unsubscribe();
  }

}
