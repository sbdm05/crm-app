import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public numVersion !: number;

  constructor(
    private version : VersionService
  ) { 
   this.version.versionNum.subscribe(data=>{
     console.log(data);
     this.numVersion = data
   })
  }

  ngOnInit(): void {
  }

}
