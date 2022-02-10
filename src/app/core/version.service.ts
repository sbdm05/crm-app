import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class VersionService {

  public versionNum =  new BehaviorSubject(1)

  constructor() { }

  public incrementVersion(){
    // this.versionNum.value => dernier flux de données
    // on peut le récupérer avec .value
    this.versionNum.next(this.versionNum.value +1)
    console.log(this.versionNum.value);
  }
}
