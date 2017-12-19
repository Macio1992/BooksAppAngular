import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BooksService{

    url: string = 'https://gwo.pl/booksApi/v1';

    constructor(private http: Http){}

    search(terms: Observable<string>){
        return terms.debounceTime(400).distinctUntilChanged().switchMap(term => this.getBooks(term));
    }

    getBooks(term): Observable<any>{
        return this.http.get(`${this.url}/search?query=${term}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

}