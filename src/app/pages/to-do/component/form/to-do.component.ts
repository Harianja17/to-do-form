import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Todo } from '../../model/todo.model';

import { ToDoService } from '../../service/to-do.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private readonly service:ToDoService, private route:ActivatedRoute, 
    private router:Router, private location:Location) { }


  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params && params['id']){
        console.log(`Params ${params}`,params);
        this.todo=this.service.getDataById(params['id']);
        this.todoForm.controls['id'].setValue(params['id'])
        this.todoForm.controls['activity'].setValue(this.todo.activity)
        this.todoForm.controls['dateline'].setValue(this.todo.dateline)
      }
     
    })
    // this.getListToDo()
  }
  getListToDo(){
    this.listToDo=this.service.getTodos()
  }

  updateDta(id:string){
 
  }


  todoForm:FormGroup= new FormGroup({
    id: new FormControl(null, Validators.required),
    activity:new FormControl(null, Validators.required),
    dateline: new FormControl(null, Validators.required)
  })

  listToDo:Todo[]=[]
  todo:any;

  submitData(data:Todo){
    this.service.addData(data)
    this.router.navigateByUrl('/totable')
  }

  form(property:string):FormGroup{
    return this.todoForm.get(property) as FormGroup;
  }

  idFromParams:string=''



}
