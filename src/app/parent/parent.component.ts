import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  data:string='salut';

  parentMessage:FormControl=new FormControl(this.data);
  
  @Output()
  myChange : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  update(){
    this.data=this.parentMessage.value.toString().toUpperCase();
    this.myChange.emit(this.data);
  }

}
