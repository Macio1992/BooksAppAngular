import { TestBed, async } from "@angular/core/testing";
import { BooksComponent } from "./books.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from "../pagination/pagination.component";
import { BookComponent } from "../book/book.component";
import { HttpModule } from "@angular/http";

describe('BooksComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
                BooksComponent,
				BookComponent,
				PaginationComponent
            ],
            imports: [
                FormsModule,
				ReactiveFormsModule,
				HttpModule
			],
			providers:[
				
			]
		}).compileComponents();
	}));

	it('should create books component', async(() => {
		const fixture = TestBed.createComponent(BooksComponent);
		const books = fixture.debugElement.componentInstance;

		expect(books).toBeTruthy();
	}));

	it('should have property books and it should be undefined', async(() => {
		const fixture = TestBed.createComponent(BookComponent);
		const book = fixture.debugElement.componentInstance;

		expect(book.books).toBeUndefined();
	}));

});