import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrls: ['./list-visit.component.css']
})
export class ListVisitComponent implements OnInit{

  @Input() allvisitlist: any;
  @Output() deleteVisit = new EventEmitter<number>();

  constructor(){}
  ngOnInit():void{

  }

 clearVisit(index: number){
  this.deleteVisit.emit(index);
 }
}


 
