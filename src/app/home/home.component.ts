import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector:'home-pages',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{
    @Input() dataFromParent:string=''
    @Input() dataFromParentNumber:number=0
    @Output() title = new EventEmitter<string>()
    @Output() counter= new EventEmitter<number>()
    @Input() dataDecrement:number=100

    number:number=100
   

    sendData(){
        this.title.emit('Ini Judul')
    }
    sendNumber(){
        this.counter.emit (this.number -=1)
    }
    receivedNumber(value:any){
        this.dataDecrement=value
    }

    @Input() modelDataFromParent:any='';

    ngOnInit(): void {
        
    }
    
   

}