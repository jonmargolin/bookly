import {Injectable, Output, EventEmitter  } from '@angular/core';

@Injectable()
export class BooksService {

  data:any;
  test:any
  @Output() changbooks: EventEmitter<boolean> = new EventEmitter();
setdate(data)
{
  this.data=data;
}
bookupdate(data)
{
 //let newbook= Object.assign(data,this.data);
 let newbook=this.data.map(el => {  if(el.id==data.id)
  return Object.assign({}, el, data)
    return el
 });
 console.log(newbook);

this.changbooks.emit(newbook);
}
}
