import { Component, OnInit, } from '@angular/core';
import { SearchbookPipe } from './../books/searchbook.pipe';
import { BooksService } from './../books/books.service';
@Component({
  selector: 'app-navgtion',
  templateUrl: './navgtion.component.html',
  styleUrls: ['./navgtion.component.css']
})
export class NavgtionComponent implements OnInit {
  searchbook :string ="";
  constructor( private bs: BooksService) { }
  ngOnInit() {
  }
Search(){
this.bs.searchbook(this.searchbook);
}
}
