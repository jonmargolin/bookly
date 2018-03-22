import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CrudModule } from './../crud/crud.module';
import { MainComponent } from './../main/main.component';
import { NavgtionComponent } from './../navgtion/navgtion.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { BooksComponent } from './books.component';
import { BookComponent } from './../book/book.component';
import { DataService } from './../data-service/data.service';
import { BooksService } from './books.service';
import { BooknamePipe } from './../book/bookname.pipe';@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    CrudModule
  ],
  declarations: [
    MainComponent,
    NavgtionComponent,
    SidebarComponent,
    BooksComponent,
    BookComponent,
    BooknamePipe,
  ],
  providers: [
    DataService,
    BooksService
  ],
  exports:[MainComponent]
})
export class BooksModule { }
