import {Book} from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let book = new Book({
      title: 'hello',
      read: true,
      liked: true
    });
    expect(book.title).toEqual('hello');
    expect(book.read).toEqual(true);
    expect(book.liked).toEqual(true);
  });
});
