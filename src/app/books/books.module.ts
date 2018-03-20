import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MainComponent } from './../main/main.component';
import { NavgtionComponent } from './../navgtion/navgtion.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { BooksComponent } from './books.component';
import { BookComponent } from './../book/book.component';
import { DataService } from './../data-service/data.service';
@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    MainComponent,
    NavgtionComponent,
    SidebarComponent,
    BooksComponent,
    BookComponent
  ],
  providers: [
    DataService
  ],
  exports:[MainComponent]
})
export class BooksModule { }
