/**  this is the  component for  single book  */
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { WindowComponent } from './../crud/window/window.component';
import { EditComponent } from './../crud/edit/edit.component';
import { CrudModule } from './../crud/crud.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @ViewChild('imgRef') img: ElementRef;
  constructor(private windo: WindowComponent) {}
  @Input() book: any;

  ngOnInit() {
    if (this.book.img !== '') {
      this.img.nativeElement.src = this.book.img;
    } else {
      this.img.nativeElement.src = 'assets/images/books/pb.png';
    }
  }
  edit() {
    this.windo.oc(EditComponent, this.book);
  }
}
