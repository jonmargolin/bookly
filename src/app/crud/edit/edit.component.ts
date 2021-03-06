/** the edit book component */
import { Component, OnInit } from '@angular/core';
import { WindowComponent } from './../window/window.component';
import { Ibook } from './../../books/books';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {  ValidateBn } from './../name.validator';
import { AlertComponent } from './../alert/alert.component';
import { ValidationService } from './../validation.service';
import { BooksService } from './../../books/books.service';
import { DataService } from './../../data-service/data.service';
import { AlertService } from './../alert/alert.service';
import 'rxjs/add/operator/debounceTime';
 @Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  BookForm: FormGroup;
  bookNameMessage: string;
  bookAuthorMessage: string;
  dateMessage: string;
  errorMessage: string;
  allbook: Ibook[];
  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal,
     private win: WindowComponent, private bookdate: DataService,
      private bs: BooksService, private as: AlertService, private va: ValidationService) { }

  ngOnInit(): void {
    this.allbook = this.bs.getbook();
   const newdate = this.win.data.date.split('/');

    this.BookForm = this.fb.group({
      name: [this.win.data.name, [Validators.required, ValidateBn(this.allbook), Validators.minLength(3)]],
      author: [this.win.data.author, [Validators.required, Validators.minLength(3)]],
      // tslint:disable-next-line:max-line-length
      date: [this.win.data.date, [Validators.required, Validators.pattern(/^(((((0[1-9])|(1\d)|(2[0-8]))\/((0[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0[1,3-9])|(1[0-2])))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$  /)]],
    });
    const bookNameControl = this.BookForm.get('name');
    bookNameControl.valueChanges.debounceTime(1000).subscribe(value =>
    this.bookNameMessage = this.va.setMessage(bookNameControl, 'name'));

    const bookAuthorControl = this.BookForm.get('author');
    bookAuthorControl.valueChanges.debounceTime(1000).subscribe(value =>
    this.bookAuthorMessage = this.va.setMessage(bookAuthorControl, 'author'));

    const bookDateControl = this.BookForm.get('date');
    bookDateControl.valueChanges.debounceTime(1000).subscribe(value =>
    this.dateMessage = this.va.setMessage(bookDateControl, 'date'));
    this.bs.changbooks.subscribe(data => {
      if (data.length > 0) {
        this.allbook = data;
      } else {
        this.allbook = null;
      }
      });
  }
  save() {
    if (this.BookForm.dirty && this.BookForm.valid) {
      // Copy the form values over the book object values
      const b = Object.assign({}, this.win.data, this.BookForm.value);
      this.bs.bookupdate(b);
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
  delteAlert() {
    const modalRef = this.win.modalService.open(AlertComponent, { windowClass: 'alertmodle' });
    this.as.confirm.subscribe((data => {
      if (data = true) {
        modalRef.dismiss();
        this.bookdate.deltebook(this.win.data.id)
        this.bs.deletedBook(this.win.data.id);
        this.activeModal.close();
      }
    }),
      (err: any) => console.log(err)
    );
  }
}
