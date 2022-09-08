import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  jawaban:number=0;
  a:string=''
  b:string=''
  operator:string=''
  button:string=''


  onKeyPressUp(event:any){
    this.a=(event.target.valueAsNumber)
   
  }
  onKeyPressBottom(event:any){
    this.b=(event.target.valueAsNumber)
  }
  add(){
    this.operator='+'

  }
  subtraction(){
    this.operator='-'
    

  }
  multiply(){
    this.operator='*'

  }
  division(){
    this.operator='/'
    

  }
  result(){
    // if(this.operator==='/'){
    //   this.jawaban=this.a/this.b
    // }else if(this.operator==='+'){
    //   this.jawaban=this.a+this.b
    // }else if(this.operator==='-'){
    //   this.jawaban=this.a-this.b
    // }else if(this.operator==='*'){
    //   this.jawaban=this.a*this.b
    // }
    this.jawaban=eval(this.a+this.button+this.b)
  }

  clear(){
    this.a=''
    this.b=''
    this.button=''
    this.jawaban=0
  }
  action(event:any){
    this.button=event
  }


}
