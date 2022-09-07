import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements 
OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  dateNow=new Date()
  intervalValue:any;
  @Input() parentData:number=0;

  constructor() { console.log('constructor');
  }

  ngOnInit(): void {
    this.tick()
    console.log('ng on init calles');
    
  }

  tick(){
    this.intervalValue=setInterval(()=>{
        this.dateNow= new Date() 
      },1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes happen',changes);
  }

  ngDoCheck(): void {
    console.log('check happen');
  }
  ngAfterContentInit(): void {
    console.log('content init happen');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
  ngAfterViewInit(): void {
    console.log('after view init happen');
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalValue)
    console.log('destroy happen');
  }


}
