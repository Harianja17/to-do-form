import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { Todo } from "./model/todo.model";
import { ToDoService } from "./to-do.service";

@Component({
    selector: 'app-table',
    templateUrl: './to-do_table.html'
})
export class ToDoTableComponent {
    constructor(private readonly service:ToDoService) { }
@Input() listToDo: any[]=[];
@Input() todo:any;
@Input() ToDoForm:FormGroup=new FormGroup({});

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
    this.todo=data
    this.setFormGroup()
  }
  setFormGroup(){
    this.ToDoForm.controls['id'].setValue(this.todo.id)
    this.ToDoForm.controls['activity'].setValue(this.todo.activity)
    this.ToDoForm.controls['dateline'].setValue(this.todo.dateline)

}

finish:boolean=false
setFinish(id:any){
    const update = this.listToDo.find(x => x.id === id.id);
    if(update){
        if(this.finish===false){
            this.finish=true;
        } 
        else if(this.finish===true) this.finish=false
        
    }
    
}



}
