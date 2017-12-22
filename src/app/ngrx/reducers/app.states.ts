import { Book } from '../../models/book';

export interface AppState {
    booksState: BooksState
}

export interface BooksState {
    books: Book[];
}