import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = "https://localhost:44329/api";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/category`)
  }
  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/book`)
  }
  getBookByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/book/${catId}`)
  }
  getBookByBookId(catId: any, bookId: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/product-detail/${bookId}`)
  }
}
