import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css'],
})
export class BooksItemComponent implements OnInit {
  @Input() book!: Book;

  constructor() {}

  ngOnInit(): void {}
}
