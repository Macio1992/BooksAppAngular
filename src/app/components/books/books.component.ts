import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Subject } from 'rxjs/Subject';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Book } from '../../models/book';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    providers: [ BooksService ]
})

export class BooksComponent {

    books: Book[];
    results: Object;
    searchTerm$ = new Subject<string>();
    searchForm: FormGroup;

    constructor(private _service: BooksService, private fb: FormBuilder){
        
        this.searchForm = fb.group({
            "term": ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(12)])]
        });

        this.searchForm.valueChanges.subscribe(form => {
            this.searchTerm$.next(form.term);
        });

        this._service.search(this.searchTerm$).subscribe(books => {
            this.books = books;
        });
    }

}