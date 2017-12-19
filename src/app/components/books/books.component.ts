import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    providers: [ BooksService ]
})

export class BooksComponent implements OnInit {

    books: any[];
    searchForm: FormGroup;
    results: Object;
    searchTerm$ = new Subject<string>();

    constructor(private _service: BooksService, private fb: FormBuilder){
        
        this._service.search(this.searchTerm$).subscribe(books => {
            // this.books = books;
            console.log('books');
            console.dir(books);
        });

        this.searchForm = fb.group({
            term: ['', Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(12) ])]
        });
    }

    ngOnInit(): void {

        

    }

    searchTerm(form: any): void {
        this._service.getBooks(form.term).subscribe(
            books => {
                // this.books = books;
                console.log('books:');
                console.dir(books);
            },
            error => {
                console.log('error');
                console.dir(error);
            }
        )
    }

}