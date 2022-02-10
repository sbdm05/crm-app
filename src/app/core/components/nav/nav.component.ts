import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private versionService : VersionService) { }

  ngOnInit(): void {
  }

  public increment(): void{
    // accéder au service
    this.versionService.incrementVersion();
  }

}
