import { TestBed, async } from "@angular/core/testing";
import { BookComponent } from "./book.component";

describe('BookComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BookComponent
			]
		}).compileComponents();
	}));

	it('should create book component', async(() => {
		const fixture = TestBed.createComponent(BookComponent);
		const book = fixture.debugElement.componentInstance;

		expect(book).toBeTruthy();
	}));

	it('should have property book and it should be undefined', async(() => {
		const fixture = TestBed.createComponent(BookComponent);
		const book = fixture.debugElement.componentInstance;

		expect(book.book).toBeUndefined();

	}));

});