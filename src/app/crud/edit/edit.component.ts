import { Component, OnInit } from '@angular/core';
import { WindowComponent } from './../window/window.component';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './../alert/alert.component';
import {BooksService } from './../../books/books.service';
import { DataService } from './../../data-service/data.service';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  BookForm: FormGroup;
  bookNameMessage :string;
  errorMessage: string;
  private NamevalidationMessages = {
    required: 'Please enter the book name.',
    pattern: 'Please enter a valid name',
    minlength: 'Please enter at least 4 characters.'
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
  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private win: WindowComponent,private bookdate:DataService, private bs:BooksService, private al: AlertComponent) { }

  ngOnInit():void {
    this.BookForm = this.fb.group({
      name: [this.win.data.name, [Validators.required, Validators.minLength(3)]],
      author:[this.win.data.author, [Validators.required, Validators.minLength(3)]],
      date:[this.win.data.date, [Validators.required]],
    })
    const bookNameControl = this.BookForm.get('name');
    bookNameControl.valueChanges.debounceTime(1000).subscribe(value =>
        this.setMessage(bookNameControl,"name"));
        const bookAuthorControl = this.BookForm.get('author');
        bookNameControl.valueChanges.debounceTime(1000).subscribe(value =>
           this.setMessage(bookNameControl,"author"));

      this.al.deconfrim().subscribe(data => {
        if (data.length > 0)
        {
        cons
        else{
          this.data=null;
        }
        });
  }

  save()
  {
    if (this.BookForm.dirty && this.BookForm.valid) {
      // Copy the form values over the product object values
      let b = Object.assign({}, this.win.data, this.BookForm.value);
      this.bs.bookupdate(b);
 //  this.win.data.name=this.BookForm.value.name;
      this.bookdate.bookupdateb(b)
      .subscribe(
          (data) => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
      );
} else if (!this.BookForm.dirty) {
  this.onSaveComplete();
}
  }
  onSaveComplete(): void {
    // Reset the form to clear the flags
this.activeModal.close();
}
delteAlert()
{
  const modalRef = this.win.modalService.open(AlertComponent, { windowClass: 'alertmodle' }); 
}

  setMessage(c: AbstractControl,type): void {
    this.bookNameMessage  = '';
    if ((c.touched || c.dirty) && c.errors) {
       this.bookNameMessage = Object.keys(c.errors).map(key =>
            this.NamevalidationMessages[key]).join(' ');}
            else{
              this.bookNameMessage=null
            }
   /* let t    
    if ((c.touched || c.dirty) && c.errors) {
t= Object.keys(c.errors)
        /*this.bookNameMessage = Object.keys(c.errors).map(key =>
            this.NamevalidationMessages[key]).join(' ');
    }
    else{
      this.bookNameMessage=null
    }
    switch(type){
      case "name":
      if(t){
          this.bookNameMessage = t.map(key =>
            this.NamevalidationMessages[key]).join(' ');
            console.log(this.bookNameMessage);
            this.bookNameMessage  ="test";
      }
      else{
        this.bookNameMessage=null
      }
      break;
    }*/
}

}
