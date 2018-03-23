import { Injectable } from '@angular/core';
import { AbstractControl } from "@angular/forms/src/model";
import { BooksService } from "./../books/books.service";
@Injectable()
export class ValidationService {

  bookNameMessage: string;
  private NamevalidationMessages = {
    required: 'Please enter the book name.',
    pattern: 'Please enter a valid name',
    minlength: 'Please enter at least 4 characters.',
    name: 'this name ia all ready exsist'
  };
  private AuthorvalidationMessages = {
    required: 'Please enter the book author.',
    pattern: 'Please enter a valid name',
    minlength: 'Please enter at least 4 characters.'
  };
  private datevalidationMessages = {
    required: 'Please enter the book date.',
    pattern: 'Please enter a valid date',
  };
  constructor( private bs: BooksService) { }
  gebooks()
  {
    return this.bs.getbook;
  }
validname (c: AbstractControl): {[key: string]: boolean} | null
{
  let bn=c.get('name');
  
  if(bn.pristine)
    {
      return null;
    }

    return { 'match': true };

}
  setMessage(c: AbstractControl, type) {
     let t    
     if ((c.touched || c.dirty) && c.errors) {
 t= Object.keys(c.errors)
       switch(type){
       case "name":
       if(t){
           this.bookNameMessage = t.map(key =>
             this.NamevalidationMessages[key]).join(' ');
             return this.bookNameMessage;
       }
       else{
         return this.bookNameMessage=null
       }
    case "author":
    if(t){
    this.bookNameMessage = t.map(key =>
      this.AuthorvalidationMessages[key]).join(' ');
      return this.bookNameMessage;
    }
      else{
        return this.bookNameMessage=null
      }
      case "date":
      if(t){
      this.bookNameMessage = t.map(key =>
        this.datevalidationMessages[key]).join(' ');
        return this.bookNameMessage;
      }
        else{
          return this.bookNameMessage=null
        }
     }
  }
}
}
