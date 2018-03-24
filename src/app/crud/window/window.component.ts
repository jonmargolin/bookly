/** main   modla continer  */

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './../edit/edit.component';
import {AddbookComponent } from './../../crud/addbook/addbook.component';
import { Ibook } from '../../books/books';
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent  {
  closeResult: string;
  data: Ibook;
  constructor(public modalService: NgbModal, public activeModal: NgbActiveModal) { }

  oc(componanta, data) {
    this.data = data;
    const modalRef = this.modalService.open(componanta, { windowClass: 'dark-modal' });
    modalRef.componentInstance.data = this.data;
  }
}
