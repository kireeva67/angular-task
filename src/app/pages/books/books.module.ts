import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BooksComponentComponent } from 'src/app/components/books-component/books-component.component';
import { BooksItemComponent } from '../../components/books-item/books-item.component';

@NgModule({
  declarations: [BooksComponent, BooksComponentComponent, BooksItemComponent],
  imports: [CommonModule, BooksRoutingModule, MatCardModule, FlexLayoutModule],
})
export class BooksModule {}
