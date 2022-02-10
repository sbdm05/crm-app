import { Component, Input, OnInit } from '@angular/core';

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

  // import de la valeur depuis Parent
  @Input() propEnfant!: string;
  
  constructor() { 
    // this.propEnfant n'est pas encore lu depuis le template html
    console.log(this.propEnfant)
  }

  ngOnChanges(): void{
    // fires everytime there is a change
    console.log(this.propEnfant, 'ngOnChanges')
  }

  ngDoCheck(): void{
    console.log(this.propEnfant, "ngDoCheck")
  }

  ngOnInit(): void {
    // fires only once
    console.log(this.propEnfant)
  }

}
