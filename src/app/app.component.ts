import { AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  birthday:Date=new Date('1997-01-01')
  someString:string='AYaM bUakAr'
  someNumber:number=5

  page:boolean=false
  changePage(){
    this.page=true
  }
}
