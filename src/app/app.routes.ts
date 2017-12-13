import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';

export const routes: Routes = [
    {
        path: 'books',
        component: BooksComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);