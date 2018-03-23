import {Injectable, Output, EventEmitter  } from '@angular/core';

@Injectable()
export class BooksService {

  data:any;
  list:any
  @Output() changbooks: EventEmitter<boolean> = new EventEmitter();
setdate(data)
{
  this.data=data;
  
}
allBook(){
  this.list=Object.values(this.data);
  this.changbooks.emit(this.list);
}
getbook()
{
  return this.data;
}
bookupdate(data)
{
 //let newbook= Object.assign(data,this.data);
 let newbook=this.data.map(el => {  if(el.id==data.id)
  return Object.assign({}, el, data)
    return el
 });


this.changbooks.emit(newbook);
}
searchbook(search){
  let ob=Object.keys(this.data).reduce((obj, key, value) => {
    if (this.data[value].name ==search ) {
      return { ...obj, [key]: this.data[key] }
    }
    return obj
  }, {})
  this.list=Object.values(ob);
  this.changbooks.emit(this.list);
}
deletedBook(id)
{
let ob=Object.keys(this.data).reduce((obj, key, value) => {
    if (this.data[value].id !== id) {
      return { ...obj, [key]: this.data[key] }
    }
    return obj
  }, {})
  this.list=Object.values(ob);
  this.changbooks.emit(this.list);
}
addbook(data)
{
  this.list= immutablePush(this.data,data)
  this.data=this.list;
  this.changbooks.emit(this.list);
}
}
function immutablePush(arr, newEntry){
  return [].concat(arr, newEntry)
}