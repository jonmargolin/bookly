import { Component, OnInit } from '@angular/core';
import { DataService } from './../data-service/data.service';
import { Ibook} from './books';
import {BooksService } from './books.service';
import { SearchbookPipe } from './../books/searchbook.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 data:any;
  constructor( private dataService: DataService, private bs: BooksService ) { }

  ngOnInit() {
  this.dataService.getBooks().subscribe(
    (data: Ibook) => {
      if (data) {
     this.data=data
this.bs.setdate(data);
      }
    },
    (err: any) => console.log(err),
    () => console.log("all done")
    )
    this.bs.changbooks.subscribe(data => {
      if (data.length > 0)
      {
        this.data=data
      }
      else{
        this.data=null;
      }
      });
  }

}
