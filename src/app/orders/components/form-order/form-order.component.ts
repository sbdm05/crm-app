import { Component, Input, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  // on crée un tableau à partir de Enum StateOrder
  public states = Object.values(StateOrder);
  @Input() init!: Order;
  // on initialise form de type FormGroup
  public form!: FormGroup;

  // On injecte FormBuilder
  constructor(private fb : FormBuilder) { }

  // initialise le form
  // ngOnInit est déclenché après le premier ngOnChanges, donc this.init ne renverra pas undefined.
  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours : [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta : [this.init.typePresta],
      client: [this.init.client],
      comment:[this.init.comment],
      id: [this.init.id]
    })
  }
}
