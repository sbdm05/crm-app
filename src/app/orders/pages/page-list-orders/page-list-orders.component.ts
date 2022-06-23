import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { BehaviorSubject, Subject, Subscription} from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit{
  

  // ici on obtient un tableau avec comme valeur les valeurs des propriétés de l'objet StateOrder
  public states = Object.values(StateOrder);

  public propParent: string

  // nouvel obeservable
  private test= new BehaviorSubject(0);

  // on crée une souscription
  private sub!: Subscription;

  //public collection !: Order[];
  // j'initialise une variable de type Observable
  public collection$!: Subject<Order[]>;


  public headers = ['Action', 'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'];

  // injection de la classe ordersService
  constructor(
    private ordersService : OrdersService,
    private router: Router
    ) {
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


  ngOnInit(): void {
    // on souscrit à l'observable à chaque ngOnInit()
    this.sub = this.test.subscribe((data: any) => console.log(data));
  }

  ngOnChanges(){
    //this.changeState(e);
    console.log('test')
  }

  public onChangeTitle(){
    this.propParent = "nouveau titre dans onChangeTitle"
  }

  public changeState(item: any, e: any): void{
    const state = e.target.value;
    this.ordersService.changeState(item, state).subscribe((data: any)=> {
      console.log(data, "data");
      // ici item pointe vers data
      //item = data;
      Object.assign(item, data)
      // spread operator
      // item = {...data}
    })
  }

  public goToEdit(item: Order): void{
    this.router.navigate(['orders', 'edit', item.id])
  }

  public deleteItem(item: Order)  :void{
    // appel service
    this.ordersService.delete(item).subscribe();
  }

  ngOnDetroy(): void{
    this.sub.unsubscribe();
  }

}
