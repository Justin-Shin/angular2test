import { Injectable } from '@angular/core';
import {Book} from './book';

@Injectable()
export class BookDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for books's
  books: Book[] = [];
  constructor() { }

  addBook(book: Book): BookDataService {
    if (!book.id) {
      book.id = ++this.lastId; //iterates the placeholder above in BookDataService
    }
    this.books.push(book); //adds the book to the book placeholder
    return this;
  }

  deleteBookById(id: number): BookDataService {
    this.books = this.books
      .filter(book => book.id !== id); //takes the array of books and filters out all that do not match the id
    return this;
  }

  updateBookById(id: number, values: Object = {}): Book {
    let book = this.getBookById(id);
    if (!book) {
      return null;
    }
    Object.assign(book, values);
    return book;
  }

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book {
    return this.books
      .filter(book => book.id === id)
      .pop();
  }

  // Toggle book read/complete
  toggleBookRead(book: Book){
    let likedValue = book.liked
    //if the book is not read (unchecking here), then it can't be liked.
    if (book.read) {
      likedValue = false
    }
    //made the mistake of trying to add the if inside of the updateBookById, which is a nogo- kept getting an error.
    let updatedBook = this.updateBookById(book.id, {
      read: !book.read,
      liked: likedValue
    });
    return updatedBook;
  }

  // Toggle book liked
  toggleBookLiked(book: Book){
    let readValue = book.read
    //If the book is liked, it must have been read, so it should toggle the "read" switch as well
    if (!book.liked) {
      readValue = true
    }
    let updatedBook = this.updateBookById(book.id, {
      liked: !book.liked,
      read: readValue
    });
    return updatedBook;
  }
}
