import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})

export class BookComponent {

    @Input() book: Book;

}