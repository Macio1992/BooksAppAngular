import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';

const routes: Routes = [
    {
        path: '',
        component: BooksComponent
    }
];

export const routing = RouterModule.forChild(routes);