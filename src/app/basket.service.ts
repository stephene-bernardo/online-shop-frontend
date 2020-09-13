import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl: string = `${environment.onlineShopBackendURL}/basket`
  constructor(private http: HttpClient) {}

  insert(userid, productid, quantity){
    return this.http.post(this.baseUrl, {
        "userid": userid,
        "productid": productid,
        "quantity": quantity
      }, {withCredentials: true});
  }

  findById(userid){
    return this.http.get(`${this.baseUrl}`, {withCredentials: true})
  }

  remove(id){
    return this.http.delete(`${this.baseUrl}/${id}`, {withCredentials: true});
  }
}
