import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './books.routes';
import { BooksComponent } from './books.component';

@NgModule({
    imports: [
        CommonModule,
        routing,
    ],
    declarations: [
        BooksComponent,
    ]
})

export class BooksModule {}