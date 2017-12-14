import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BooksService{

    url: string = 'https://gwo.pl/booksApi/v1';

    constructor(private http: Http){}

    getBooks(term: string): Observable<any>{
        return this.http.get(`${this.url}/search?query=${term}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

}