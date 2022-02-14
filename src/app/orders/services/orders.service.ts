import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment'

// permet de créer un singleton d'OrdersService 
// au niveau root de l'appli (à partir de angular 6)
// dès le démarrage de l'appli
@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  // le service HttpClient retourne des observables
  // on met ! car propriété pas initialisée dans le constructor. 
  private collection$! : Observable<Order[]>

  // on utilise l'url stocké dans le dossier environnement
  private urlApi = environment.urlApi;

  
  constructor(
    private http : HttpClient
  ) { 
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab: any)=>{
        return tab.map((obj: any)=>{
          return new Order(obj)
        }) 
      })
    )
  }

  // get collection
  public get collection (): Observable<Order[]>{
    return this.collection$
  }

  // set collection
  public set collection(col : Observable<Order[]>){
    this.collection$ = col
  } 



  // set collection 

  // edit state item

  // update item in collection (put ou patch)

  // add item in collection (post)

  // delete item in collection (delete)

  // get by id in collection



}
