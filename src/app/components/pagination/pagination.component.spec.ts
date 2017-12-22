import { TestBed, async } from "@angular/core/testing";
import { PaginationComponent } from "./pagination.component";
import { BookComponent } from '../book/book.component';

describe('PaginationComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
            imports:[
            ],
			declarations: [
				PaginationComponent,
				BookComponent
			]
		}).compileComponents();
	}));

	it('should create a pagination component', async(() => {
		const fixture = TestBed.createComponent(PaginationComponent);
		const pagComp = fixture.debugElement.componentInstance;

		expect(pagComp).toBeTruthy();
	}));

	it('should have property allBooks and pagedBooks and it should be undefined', async(() => {
		const fixture = TestBed.createComponent(PaginationComponent);
		const pagination = fixture.debugElement.componentInstance;

		expect(pagination.allBooks).toBeUndefined();
		expect(pagination.pagedBooks).toBeUndefined();
	}));

	it('should have property pager and it should be empty', async(() => {
		const fixture = TestBed.createComponent(PaginationComponent);
		const pagination = fixture.debugElement.componentInstance;

		var x = {};

		expect(pagination.pager).toEqual(x);
	}));

});