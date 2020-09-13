import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = `${environment.onlineShopBackendURL}/product`
  constructor(private http: HttpClient) { }

  findAll():Observable<Object>{
    return this.http.get(this.baseUrl);
  } 

  findType(): Observable<Object>{
    return this.http.get(this.baseUrl+"/type")
  }

  findByType(type): Observable<Object>{
    let options = {params: new HttpParams().set('type', type)}
    return this.http.get(this.baseUrl, options);
  }

  
  findByName(name): Observable<Object>{
    let httpParams = new HttpParams();
    httpParams = httpParams.set('name', name)
    let options = {params: httpParams}
    return this.http.get(this.baseUrl, options);
  }

  find(name, type): Observable<Object>{
    let httpParams = new HttpParams();
    if(name && type){
      httpParams = httpParams.set('name', name).set('type', type)
    }
    else if(type){
      httpParams = httpParams.set('type', type)
    }
    else if(name){
      httpParams = httpParams.set('name', name)
    }
    let options = {params: httpParams}
    return this.http.get(this.baseUrl, options);
  }
}
