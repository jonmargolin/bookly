/** the add  book component */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidationService } from './../validation.service';
import {  ValidateBn } from './../name.validator';
import {  DataService } from './../../data-service/data.service';
import { BooksService } from './../../books/books.service';
import { Ibook } from './../../books/books';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  BookForm: FormGroup;
  bookNameMessage: string;
  bookAuthorMessage: string;
  dateMessage: string;
  errorMessage: string;
  allbook: Ibook[];
  private base64textString: String= '';
  @ViewChild('imgRef') img: ElementRef;

  constructor(private fb: FormBuilder, private ds: DataService, private bs: BooksService,
     public activeModal: NgbActiveModal, private va: ValidationService) { }
  ngOnInit() {
    this.allbook = this.bs.getbook();
    this.BookForm = this.fb.group({
      name: ['', [Validators.required, ValidateBn(this.allbook), Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      // tslint:disable-next-line:max-line-length
      date: ['', [Validators.required, Validators.pattern(/^(((((0[1-9])|(1\d)|(2[0-8]))\/((0[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0[1,3-9])|(1[0-2])))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$  /)]],
      img: ['']
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
/** converting  the  upload image the base64 */
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];
  if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
  }
}
_handleReaderLoaded(readerEvt) {
   const binaryString = readerEvt.target.result;
          this.base64textString = btoa(binaryString);
          this.base64textString = 'data:image/png;base64;,' + this.base64textString;
     this.img.nativeElement.src = this.base64textString;
  }
  save() {
  const b = this.BookForm.value;
 b.img = this.base64textString;
this.ds.creatBook(b).subscribe(
  (data => {
        this.bs.addbook(data);
        this.activeModal.dismiss();
  }),
  (err: any) => console.log(err)
);
}
cancel() {
  this.activeModal.dismiss();
}
}
