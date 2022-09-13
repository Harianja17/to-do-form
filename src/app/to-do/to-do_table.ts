import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-table',
    templateUrl: './to-do_table.html'
})
export class ToDoTableComponent {
@Input() listToDo: any[]=[];

}