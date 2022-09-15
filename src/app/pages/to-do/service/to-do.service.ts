import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todo:any;
  // todoForm:FormGroup=new FormGroup({});

  private todos:Todo[]=[
    {
      id:'001',
      activity:'Study',
      dateline:'Learn Programming',
      finish:false
    },
    {
      id:'002',
      activity:'break',
      dateline:'shalat and lunch',
      finish:false
    }
  ]

  getTodos():Todo[]{
    return this.todos
  }
  deleteData(i:number){
    this.todos.splice(i,1)
  }
  addData(data:Todo){
    data.finish=false
    const update = this.todos.find(x => x.id === data.id);
    console.log(update);
      if (update) {
        update.activity = data.activity;
        update.dateline = data.dateline;
      } else {
        this.todos.push(data)
      }
  }

  getDataById(id:string):any{
    return this.todos.find(x => x.id === id);
   
  }
  ToDoForm:FormGroup= new FormGroup({})
  getData(data:any){
    this.todo=data
    console.log(this.todo);
    
    // this.ToDoForm.controls['id'].setValue(this.todo.id)
    // this.ToDoForm.controls['activity'].setValue(this.todo.activity)
    // this.ToDoForm.controls['dateline'].setValue(this.todo.dateline)
  }


  constructor() { }
}
