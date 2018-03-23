import { Injectable,Output, EventEmitter  } from '@angular/core';


@Injectable()
export class AlertService {

  @Output() confirm: EventEmitter<boolean> = new EventEmitter();
delete(){
  this.confirm.emit(true);
}
 
}
