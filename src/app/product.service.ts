import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:3000/product'
  constructor(private http: HttpClient) { }

  findAll():Observable<Object>{
    return this.http.get(this.baseUrl);
  } 
}
