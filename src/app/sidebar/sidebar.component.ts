/** side bar component  */
import { Component, OnInit } from '@angular/core';
import { CrudModule } from './../crud/crud.module';
import { WindowComponent } from './../crud/window/window.component';
import { AddbookComponent } from './../crud/addbook/addbook.component';
import { BooksService } from './../books/books.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private windo: WindowComponent, private bs: BooksService) { }

  ngOnInit() {
  }
addbook() {
  this.windo.oc(AddbookComponent, null);
}
allBook() {
this.bs.allBook();
}
}
