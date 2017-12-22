import { Action } from '@ngrx/store'
import { Book } from '../../models/book';

export const MY_BOOKS = 'MY_BOOKS';

export class BooksAction {
    readonly type = MY_BOOKS;
    constructor(public payload: Book[]){}
}

export type ALL = BooksAction;
