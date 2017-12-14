import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PaginationService } from '../pagination/pagination.service';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    providers: [ BooksService, PaginationService ]
})

export class BooksComponent implements OnInit {

    private allItems: any[];
    searchForm: FormGroup;
    pager: any = {};
    pagedItems: any[];

    constructor(private _service: BooksService, private fb: FormBuilder, private paginationService: PaginationService){
        this.searchForm = fb.group({
            term: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(12)])]
        });
    }

    ngOnInit(): void {

        this._service.getBooks('historia').subscribe(
            books => {
                this.allItems = books;
                console.log('books');
                console.dir(books);
                this.setPage(1);
            },
            error => {
                console.log('error');
                console.dir(error);
            }
        )

    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.paginationService.getPager(this.allItems.length, page);
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    searchTerm(form: any): void {
        console.dir(form);
    }

}