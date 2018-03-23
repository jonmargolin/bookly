import { AbstractControl, ValidatorFn } from '@angular/forms';
import { BooksService } from './../books/books.service';
import { Ibook } from './../books/books';
export function ValidateBn(books: Ibook[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        for(let b of books)
            {
        if (control.value == b.name) {
      
            return { 'name': true }
           
        }
    }
        return null;    
    }
}
