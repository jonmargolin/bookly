import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ibook } from './../books/books';
export class DemoData implements InMemoryDbService {
    createDb() {
       
        let books: Ibook[]=[{
            id:1,
            img:"assets/images/books/book1.png",
            name:"@@@fred the monster@@",
            author:"Robert Polad",
            date:"11/10/2016"
        },{
            id:2,
            img:"assets/images/books/book1.png",
            name:"Fredz Thez Monster",
            author:"Roberto Polad",
            
            date:"11/10/2016"
        },
        {
            id:3,
            img:"assets/images/books/book1.png",
            name:"My Book",
            author:"Roberto Polad",
            
            date:"11/10/2016"
        }
    ]
        console.log();
    return {books};
    }
}