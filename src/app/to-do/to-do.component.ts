import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }
  @Output() list=new EventEmitter<FormGroup>()

  ngOnInit(): void {
  }
  todoForm:FormGroup= new FormGroup({
    id: new FormControl(null, Validators.required),
    activity:new FormControl(null, Validators.required),
    dateline: new FormControl(null, Validators.required)
  })

  listToDo:any[]=[]

  submitData(data:any){
    this.listToDo.push(data);
    this.list.emit(this.todoForm)
    
  }
  // sendData(){
  //   this.list.emit(this.todoForm)
  // }
  form(property:string):FormGroup{
    return this.todoForm.get(property) as FormGroup;
  }

}
