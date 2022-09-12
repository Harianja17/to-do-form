import { AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  data:string='Ini Rahasia'
  dataNumber:number=404
  dataFromChild:string=''
  dataFromChildNumber:number=100
  @Output() decrement= new EventEmitter<number>()

  increment(){
    this.dataNumber+=1
  }

  receivedData(value:any){
    this.dataFromChild=value
  }
  receivedNumber(value:any){
    this.dataFromChildNumber=value
  }

  ngmodelExample:string='example'

  clearText(){
    this.ngmodelExample=''
  }
  number:number=100
  sendNumber(){
    this.decrement.emit (this.number -=1)
}



}
