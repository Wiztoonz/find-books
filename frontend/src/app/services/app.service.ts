import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) {}

    getBooks() {
        return this.http.get('http://localhost:8080/books');
    }

    getBook(id) {
        return this.http.get(`http://localhost:8080/books/${id}`);
    }

}