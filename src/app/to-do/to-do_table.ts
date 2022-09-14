import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Todo } from "./model/todo.model";
import { ToDoService } from "./to-do.service";

@Component({
    selector: 'app-table',
    templateUrl: './to-do_table.html'
})
export class ToDoTableComponent implements OnInit{
    constructor(private readonly service:ToDoService, private router:Router) { }
    ngOnInit(): void {
       this.listToDo= this.service.getTodos()
    }
listToDo: any[]=[];
// @Input() todo:any;
// @Input() ToDoForm:FormGroup=new FormGroup({});

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
getDetail(data:Todo){
    // this.todo=data
    this.setFormGroup()
  }
  setFormGroup(){
    // this.ToDoForm.controls['id'].setValue(this.todo.id)
    // this.ToDoForm.controls['activity'].setValue(this.todo.activity)
    // this.ToDoForm.controls['dateline'].setValue(this.todo.dateline)

}

setFinish(data:Todo){
    data.finish=!data.finish
}
moveToForm(id:string){
    // this.route.navigateByUrl('todo/'+ id)
    this.router.navigate(['/todo'],{queryParams:{order:'id'}})
  }

}
