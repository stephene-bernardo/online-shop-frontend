import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = `${environment.onlineShopBackendURL}/user`

  constructor(private http: HttpClient) {

   
  }
  login(name: string, password:string): Observable<Object>{
    // let options = {params: new HttpParams().set('username', name).set('password', password)}
    // return this.http.get(this.baseUrl, options)
    return this.http.post(`${this.baseUrl}/authenticate`, {
      "username":name,
      "password":password
    }, {withCredentials: true})
  }

  getProfile(): Observable<Object>{
      return this.http.get(`${this.baseUrl}/profile`, {withCredentials: true})
  }

  logout(): Observable<Object>{
    return this.http.get(`${this.baseUrl}/logout`, {withCredentials: true})
  }
}
