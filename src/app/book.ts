export class Book {
  id: number;
  title: string = '';
  read: boolean = false;
  liked: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

let book = new Book({
  title: 'The Hobbit: To There and Back Again',
  read: false,
  liked: false
});
