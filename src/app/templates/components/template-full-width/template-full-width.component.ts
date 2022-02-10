import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  // besoin d'ajouter (!) ou undefined
  // si propriété pas initialisée dans le constructor
  // public title!: string;
  // public title: string | undefined;
  // public title: string;

   @Input() propEnfant: string;
  
  // injection de la classe ordersService
  constructor() {
    this.propEnfant = "titre"
  }

  ngOnChanges(){
    console.log('test depuis template')
  }

  ngOnInit(): void {
  }

}
