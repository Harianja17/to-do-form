import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  @Output() email = new EventEmitter<string>()
  @Output() password = new EventEmitter<string>()
  @Output() loggedIn= new EventEmitter<boolean>()
  isLoggedIn:boolean=false;

  
  dataEmail:string=''
  dataPassword:string=''

  login(){
    if(this.dataEmail==='admin@example.com' && this.dataPassword==='password'){
      alert('Login Success')
      this.email.emit(this.dataEmail)
      this.password.emit(this.dataPassword)
      this.isLoggedIn=true
      this.loggedIn.emit(this.isLoggedIn)
    } 
    else alert('Login Failed')
  }

  ngOnInit(): void {
  }

}
