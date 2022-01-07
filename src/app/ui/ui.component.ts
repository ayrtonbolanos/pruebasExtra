import { Component, OnInit } from '@angular/core';
import {formula} from '../tests/formula'
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit{
  constructor(){}
  ngOnInit():void{}

  i:number=0;
  r=0;
  calcular(){
    let r2 =0;
    let f:formula=new formula();
    r2=f.calcular(this.i);
    this.r=r2;
  }
}