import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  listVisit: any[] = [];

  constructor(){}
ngOnInit(){}

addVisit(visit: any){

  this.listVisit.push(visit);
}
clearedVisit(index: number){
  this.listVisit.splice(index,1);

}

}



