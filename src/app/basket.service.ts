import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl: string = 'http://localhost:3000/basket'
  constructor(private http: HttpClient) { }

  insert(userid, productid, quantity){
    return this.http.post(this.baseUrl, {
        "userid": userid,
        "productid": productid,
        "quantity": quantity
      });
  }

  findById(userid){
    return this.http.get(`${this.baseUrl}/${userid}`)
  }

  remove(id){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
