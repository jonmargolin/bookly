import { Component, OnInit } from '@angular/core';
import { DataService } from './../data-service/data.service';
import { Ibook} from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 data:any;
  constructor( private dataService: DataService ) { }

  ngOnInit() {
  this.dataService.getBooks().subscribe(
    (data: Ibook) => {
      if (data) {
     this.data=data
      }
    },
    (err: any) => console.log(err),
    () => console.log("all done")
    )
  }

}
