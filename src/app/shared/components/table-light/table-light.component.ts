import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() public collection !: Order[] 
  @Input() public headers !: string[] 

  constructor() { 
    // l'affectation des deux variables n'a pas encore été effectuée
    // console.log(this.collection) // undefined
  }

  ngOnChanges(){
    console.log(this.collection) // valeur affectée
  }

  ngOnInit(): void {
  }

}
