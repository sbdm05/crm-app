import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  constructor() { }

  ngOnChanges(){
    console.log('test depuis btn');
    
  }

  ngOnInit(): void {
  }

}
