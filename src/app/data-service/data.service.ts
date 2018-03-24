/** the data service for http connection */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ibook } from './../books/books';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class DataService {
private booksurl = 'api/books';
  constructor(private http: HttpClient) { }
getBooks(): Observable<Ibook> {
  return this.http.get<Ibook>(this.booksurl);

}
bookupdateb(book: Ibook): Observable<Ibook> {
  const url = `${this.booksurl}/${book.id}`;
  return this.http.put(url, book)
      .map(() => book);
}
deltebook(id: number): Observable<Response> {
  const url = `${this.booksurl}/${id}`;
  return this.http.delete(url)
  .do(data => console.log('deleteBook: ' + JSON.stringify(data)))
  .catch(this.handleError);
}
private handleError(error: Response): Observable<any> {

  console.error(error);
  return Observable.throw(error.json() || 'Server error');
}
creatBook(book: Ibook): Observable<Ibook> {
 book.id = undefined;
  return this.http.post(this.booksurl, book)
  .map(this.extractData)
  .do(data => console.log('createProduct: ' ))
  .catch(this.handleError);
}
private extractData(response: Response) {
  return response || {};
}
}

