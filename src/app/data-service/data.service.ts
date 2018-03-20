import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Ibook } from './../books/books';


@Injectable()
export class DataService {
private booksurl="api/books";
  constructor(private http: HttpClient) { }
getBooks(): Observable<Ibook>{
  return this.http.get<Ibook>(this.booksurl);

}
}
