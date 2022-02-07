import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {

  // besoin d'ajouter (!) ou undefined
  // si propriété pas initialisée dans le constructor
  // public title!: string;
  // public title: string | undefined;
  public title: string;
  
  constructor() {
    this.title = "titre"
  }

  ngOnInit(): void {
  }

}
