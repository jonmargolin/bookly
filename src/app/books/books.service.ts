/** the books service  for handling the  CRUD fucntions   */
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BooknamePipe } from './../book/bookname.pipe';

@Injectable()
export class BooksService {
  data: any;
  list: any;
  @Output() changbooks: EventEmitter<boolean> = new EventEmitter();
  constructor(private datePipe: BooknamePipe) {}
  setdate(data) {
    this.data = data;
  }
  allBook() {
    this.list = Object.values(this.data);
    this.changbooks.emit(this.list);
  }
  getbook() {
    return this.data;
  }
  bookupdate(data) {
    const newbook = this.data.map(el => {
      if (el.id === data.id) {
         return Object.assign({}, el, data);
    }
      return el;
    });

    this.changbooks.emit(newbook);
  }
  searchbook(search) {
    const ob = Object.keys(this.data).reduce((obj, key, value) => {
const up = this.datePipe.transform(search);
      if (this.data[value].name.includes(up) || this.data[value].name.includes(search) ) {
        return { ...obj, [key]: this.data[key] };
      }
      return obj;
    }, {});
    this.list = Object.values(ob);
    this.changbooks.emit(this.list);
  }
  deletedBook(id) {
    const ob = Object.keys(this.data).reduce((obj, key, value) => {
      if (this.data[value].id !== id) {
        return { ...obj, [key]: this.data[key] };
      }
      return obj;
    }, {});
    this.list = Object.values(ob);
    this.changbooks.emit(this.list);
  }
  addbook(data) {
    this.list = immutablePush(this.data, data);
    this.data = this.list;
    this.changbooks.emit(this.list);
  }
}
function immutablePush(arr, newEntry) {
  return [].concat(arr, newEntry);
}

