import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  // deux variables à afficher dans le html
  @Input() public label!: string;
  @Input() public route!: string;

  constructor() { }

  ngOnChanges(){
    console.log('test depuis btn');

  }

  ngOnInit(): void {
  }

}
