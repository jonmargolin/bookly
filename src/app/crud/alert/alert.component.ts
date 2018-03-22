import { Component,Injectable, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor() { }
msg:any;
  @Output() deconfrim: EventEmitter<boolean> = new EventEmitter();
 
  delete()
  {
    this.msg="test";
    this.deconfrim.emit(msg);
  }
}
