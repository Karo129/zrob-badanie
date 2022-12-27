import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent {

  name = '';
  date = '';
  time = '';
 chosenTest = '';

  tests: any[]=[
    {name: 'Blood Counts'},
    {name: 'Glucose'},
    {name: 'Lipidogram'},
    {name: 'Ferritin'},
    {name: 'Triglycerides'}
  
  ]


incorrectForm = false;
@Output() newVisit = new EventEmitter<any>();

constructor(){
}

ngOnInit(): void {
}


confirm(){
  if(this.name =='' || this.date== '' || this.time==='' || this.chosenTest== '' )
  {
    this.incorrectForm= true;
    return;
  }
 this.incorrectForm= false;



 const confirmedVisit ={
  name: this.name,
  date: this.date,
  time: this.time,
  tests: this.tests,
 };
//  console.log(confirmedVisit)
 this.newVisit.emit(confirmedVisit)
 this.resetFields();
}

resetFields(){
  this.name = '';
  this.date = '';
  this.time = '';
  this.chosenTest = '';
} 

}
