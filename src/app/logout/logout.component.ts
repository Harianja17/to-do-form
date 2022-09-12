import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  @Input() name:string=''
  isLoggedIn:boolean=true;
setLogin(){
  this.isLoggedIn=false
}


  ngOnInit(): void {
  }

}
