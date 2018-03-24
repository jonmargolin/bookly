/** fake backend api */

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ibook } from './../books/books';
export class DemoData implements InMemoryDbService {
    createDb() {

        const books: Ibook[] = [{
            id: 1,
            img: 'assets/images/books/book1.png',
            name: '@@@fred the monster@@',
            author: 'Robert Polad',
            date: '11/10/2016'
        }, {
            id: 2,
            img: 'assets/images/books/book2.png',
            name: 'Fredz Thez Monster',
            author: 'Roberto Polad',
            date: '11/10/2016'
        },
        {
            id: 3,
            img: 'assets/images/books/book3.png',
            name: 'My Book',
            author: 'Roberto Polad',
            date: '11/10/2016'
        },
        {
          id: 4,
          img: 'assets/images/books/book4.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 5,
          img: 'assets/images/books/book5.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 6,
          img: 'assets/images/books/book6.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 7,
          img: 'assets/images/books/book7.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 8,
          img: 'assets/images/books/book8.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 9,
          img: 'assets/images/books/book9.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 10,
          img: 'assets/images/books/book10.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 11,
          img: 'assets/images/books/book11.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },
        {
          id: 12,
          img: 'assets/images/books/book12.png',
          name: 'My Book',
          author: 'Roberto Polad',
          date: '11/10/2016'

        },

    ];
    return {books};
    }
}
