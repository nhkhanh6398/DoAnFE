import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {DtoOrder} from "../interface-entity/DtoOrder";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly URL= "http://localhost:8080/order/";
  httpOptions: any;
  constructor(private httpClient: HttpClient,private loginService:LoginService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.loginService.getToken(),
        'Access-Control-Allow-Origin': 'http://localhost:4200/',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }),
    };
  }
  setOrder(dtoOrder: DtoOrder):Observable<any>{
    return this.httpClient.post<any>(this.URL+'orders',dtoOrder);

  }
  getOrdersByAccount(account: string):Observable<any>{
    return this.httpClient.get<any>(this.URL+'getOrders/' + account);
  }
}
