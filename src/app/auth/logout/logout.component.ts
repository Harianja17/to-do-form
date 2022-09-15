import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  @Input() name:string=''
  @Output() login=new EventEmitter<boolean>()
  isLoggedIn:boolean=true;
  setLogin(){
    this.isLoggedIn=false
    this.login.emit(this.isLoggedIn)
  }
 

  ngOnInit(): void {
  }

}
