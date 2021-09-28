import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-books-component',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.css'],
})
export class BooksComponentComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }
}
