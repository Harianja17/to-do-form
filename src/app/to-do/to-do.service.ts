import { Injectable } from '@angular/core';
import { Todo } from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

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
    this.todos.push(data)
    
  }
  

  constructor() { }
}
