import {Component} from '@angular/core';
import {Book} from './book';
import {BookDataService} from './book-data.service';

//this code here is what makes the component run- it calls things inside the book-data.service.ts, which then feeds into the html.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookDataService]
})
export class AppComponent {

  newBook: Book = new Book();

  constructor(private bookDataService: BookDataService) {
  }

  addBook() {
    this.bookDataService.addBook(this.newBook);
    this.newBook = new Book();
  }

  toggleBookRead(book) {
    this.bookDataService.toggleBookRead(book);
  }

  toggleBookLiked(book) {
    this.bookDataService.toggleBookLiked(book);
  }

  removeBook(book) {
    this.bookDataService.deleteBookById(book.id);
  }

  get books() {
    return this.bookDataService.getAllBooks();
  }

}
