import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Ibook } from './../books/books';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
private booksurl="api/books";
  constructor(private http: HttpClient) { }
getBooks(): Observable<Ibook>{
  return this.http.get<Ibook>(this.booksurl);

}
bookupdateb(book: Ibook): Observable<Ibook>
{
  const url = `${this.booksurl}/${book.id}`;
  return this.http.put(url,book)
      .map(() => book)
}
}

