import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string

  constructor() { }

  ngOnInit(){
    // exécuté qu'une seule fois
    console.log(this.appState);
  }

  ngOnChanges(): void{
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`
  }

}

// on veut appState vaut canceled = state-canceled
// on veut appState vaut option = state-option
// on veut appState vaut confirmed = state-confirmed

// binder ce string avec la propriété 'class' du host element td


