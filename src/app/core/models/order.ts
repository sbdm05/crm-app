import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{
    // valeurs par défaut
      tjmHt = 1200;
      nbJours = 1;
      tva = 20;
      state = StateOrder.OPTION; // enums
      typePresta! : string ; // besoin d'initialiser dans le constructor sinon prop string || null
      client!: string;
      comment!: string;
      id!: number ; 
      totalHT (): number{
        return this.tjmHt * this.nbJours;
      }
      totalTTC(): number{
        return this.tjmHt * this.nbJours* (1 + this.tva/100)
      }
      constructor(obj?: Partial<Order>) {
        if (obj) {
        Object.assign(this, obj);
      }
  }
}
