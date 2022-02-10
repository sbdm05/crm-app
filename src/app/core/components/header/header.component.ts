import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
