import { Component, Injectable, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Todo } from "../../model/todo.model";
import { ToDoService } from "../../service/to-do.service";
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
  })
@Component({
    selector: 'app-table',
    templateUrl: './to-do_table.html'
})
export class ToDoTableComponent implements OnInit{
    constructor(private readonly service:ToDoService, private router:Router,private location:Location) { }
    ngOnInit(): void {
       this.listToDo= this.service.getTodos()
    }
listToDo: any[]=[];
todo:any;
ToDoForm:FormGroup=new FormGroup({});

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

  update(data:Todo){
    this.router.navigateByUrl('todo/'+ data.id)
  }


setFinish(data:Todo){
    data.finish=!data.finish
}
moveToForm(data:Todo){
    this.router.navigateByUrl('todo/'+ data.id)
  }

}
