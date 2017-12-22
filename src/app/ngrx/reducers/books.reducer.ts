import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/books.actions';
import { BooksState } from './app.states';

export const initialState: BooksState = { books: []};

export function reducer(state = initialState, action: fromActions.ALL): BooksState {
    if(action.type === fromActions.MY_BOOKS)
        return { books: action.payload };
    
    return state;
}

export const getBooksState = createFeatureSelector<BooksState>('booksState');

export const getBooks = createSelector(
    getBooksState,
    (state: BooksState) => state.books  
);