import { Component, OnInit, Input } from '@angular/core';
import { WindowComponent } from './../crud/window/window.component';
import { EditComponent } from './../crud/edit/edit.component';
import { CrudModule } from './../crud/crud.module'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( private windo:WindowComponent ) { }
  @Input() book:any;
  
  ngOnInit() {
 
  }
edit()
{
  this.windo.oc(EditComponent,this.book);
}  
}
