import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ibook } from './../books/books';
export class DemoData implements InMemoryDbService {
    createDb() {
       
        let books: Ibook[]=[{
            id:1,
            img:"assets/images/books/book1.png",
            name:"@@@Fred The Monster@@",
            author:"Robert Polad",
            type:"kides",
            typeId:1,
            date:"11/10/2016"
        },{
            id:1,
            img:"assets/images/books/book1.png",
            name:"Fred The Monster",
            author:"Robert Polad",
            type:"kides",
            typeId:1,
            date:"11/10/2016"
        }]
        console.log();
    return {books};
    }
}