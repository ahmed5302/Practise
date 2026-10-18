import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export class Sample {
@Input('msg') test:any;
@Output() fromParent = new EventEmitter();

@Input() count:number = 0;
@Output() countChange = new EventEmitter<number>();
childProp = "CHILDPROP"
ngOnChanges(chnages:SimpleChanges){
  console.log(chnages);
  
}
ngDoCheck(){
  console.log("DO CHECK SAMPLE ",this.childProp);
  
}
ngAfterViewChecked(){
  console.log("DO AFTER SAMPLE ",this.childProp);
  
}
sampleFn(){
this.fromParent.emit("FROM PARENT");
this.count++;
this.countChange.emit(this.count);
}
}
