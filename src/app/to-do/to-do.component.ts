import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Todo } from './model/todo.model';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private readonly service:ToDoService) { }
  @Output() list=new EventEmitter<FormGroup>()
  @Output() justTodo=new EventEmitter()


  ngOnInit(): void {
    this.getListToDo()
  }
  getListToDo(){
    this.listToDo=this.service.getTodos()
  }


  todoForm:FormGroup= new FormGroup({
    id: new FormControl(null, Validators.required),
    activity:new FormControl(null, Validators.required),
    dateline: new FormControl(null, Validators.required)
  })

  listToDo:Todo[]=[]
  todo:any;

  submitData(data:any){
    
    this.list.emit(this.todoForm)
    this.justTodo.emit(this.todo)

    const update = this.listToDo.find(x => x.id === data.id);
    console.log(update);
      if (update) {
        
        
        update.activity = data.activity;
        update.dateline = data.dateline;
      } else {
        this.service.addData(data)
      }
      this.isValid=!this.isValid
  }
  deleteData(i:number){
    Swal.fire({
        title: `Do you want to delete data ${i+1} ?`,
        icon:"warning",
        showDenyButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Cancel`,
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire('Deleted!')
        this.service.deleteData(i)
        } else if (result.isDenied) {
        Swal.fire('Changes are not saved')
        }
    })   
   
}


  form(property:string):FormGroup{
    return this.todoForm.get(property) as FormGroup;
  }

  isValid:boolean=false
  setPage(){
    this.isValid=!this.isValid
  }



}
