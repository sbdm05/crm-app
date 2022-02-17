import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
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

  public changeState(i: any, state : StateOrder): Observable<any>{
    // modifier le state côté front
    //i.state = state;

    // on crée un nouvel objet avec toutes les caractéristiques de i
    // pour laisse i intacte
    const obj = new Order({...i});
    // on lui modifie le state
    obj.state = state;

    // on passe l'objet modifié
    return this.update(obj)
  }
  // edit state item
  public update(item: Order): Observable<any>{
    return this.http.put<Order[]>(`${this.urlApi}/orders/${item.id}`, item)
  }

  // add item in collection (post)
    public add(item: Order): Observable<any>{
    return this.http.post<Order[]>(`${this.urlApi}/orders`, item)
  }

  // delete item in collection (delete)

  // get by id in collection



}
