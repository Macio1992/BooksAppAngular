import {
    async,
    getTestBed,
    TestBed
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import { BooksService } from './books.service';
import { Book } from '../../models/book';

describe('Books Service', () => {

    let backend: MockBackend;
    let service: BooksService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                BooksService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(BooksService);
    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === 'https://gwo.pl/booksApi/v1/search?query=') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should return the list of books from the server on success', () => {
        setupConnections(backend, {
            body: [
                {
                    "title": "Biologia 2. Seria z tangramem. Teoria i ćwiczenia",
                    "author": "T. Greenwood, R. Allan, L. Shepherd, B. Sągin, M. Skodowska",
                    "isbn": "9788374200677",
                    "men": "133/07",
                    "pages_count": 100,
                    "levels": [
                        {
                            "school": "szkoła średnia",
                            "class": "klasa 2"
                        }
                    ],
                    "subject": "biologia",
                    "type": "podręcznik",
                    "cover": "https://files.gwo.pl/covers/books/0/257.jpg",
                    "url": "https://gwo.pl/ksiegarnia/ksiazka/257,biologia-2-seria-z-tangramem-teoria-i-cwiczenia"
                },
                {
                    "title": "Biologia 3. Seria z tangramem. Teoria i ćwiczenia",
                    "author": "T. Greenwood, R. Allan, L. Shepherd, B. Sągin, M. Skodowska",
                    "isbn": "9788374201063",
                    "men": "211/08",
                    "pages_count": 140,
                    "levels": [
                        {
                            "school": "szkoła średnia",
                            "class": "klasa 3"
                        }
                    ],
                    "subject": "biologia",
                    "type": "podręcznik",
                    "cover": "https://files.gwo.pl/covers/books/0/268.jpg",
                    "url": "https://gwo.pl/ksiegarnia/ksiazka/268,biologia-3-seria-z-tangramem-teoria-i-cwiczenia"
                }
            ],
            status: 200
        });

        service.getBooks('biologia').subscribe((data: Book[]) => {
            expect(data.length).toBe(2);
            expect(data[0].title).toBe('Biologia 2. Seria z tangramem. Teoria i ćwiczenia');
            expect(data[1].title).toBe('Biologia 3. Seria z tangramem. Teoria i ćwiczenia');
        });
    });
});