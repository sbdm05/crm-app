import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{
    // valeurs par défaut
      tjmHt = 1200;
      nbJours = 1;
      tva = 20;
      state = StateOrder.OPTION; // enums
      typePresta : string ; // besoin d'initialiser dans le constructor sinon prop string || null
      client: string;
      comment!: string;
      id!: number ; 
    // constructor(
    //     tjmHt : number,
    //     nbJours: number,
    //   tva: number,
    //   state: StateOrder.OPTION,
    //   typePresta: string,
    //   client: string,
    //   comment: string,
    //   id: number 
    // ){
    //   this.tjmHt = tjmHt,
    //   this.nbJours = nbJours,
    //   this.tva= tva,
    //   this.state=  state,
    //   this.typePresta= typePresta,
    //   this.client = client,
    //   this.comment = comment,
    //   this.id = id 
    // }
    //   tjmHt= 1200;
    //   nbJours= 1;
    //   tva= 20;
    //   state: StateOrder.OPTION;
    //   typePresta: string;
    //   client: string;
    //   comment: string;
    //   id: number ; 







}
