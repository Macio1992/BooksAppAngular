import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    providers: [ BooksService ]
})

export class BooksComponent implements OnInit {

    books: any[];

    constructor(private _service: BooksService){}

    ngOnInit(): void {

        this._service.getBooks('historia').subscribe(
            books => {
                console.log('books');
                console.dir(books);
            },
            error => {
                console.log('error');
                console.dir(error);
            }
        )

    }

}