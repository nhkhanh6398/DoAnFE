import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../interface-entity/ICustomer";
import {IEmployee} from "../interface-entity/IEmployee";
import {DtoEmployee} from "../interface-entity/DtoEmployee";
import {DtoCustomer} from "../interface-entity/DtoCustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly URL="http://localhost:8080/customer/";
  readonly URL_SEARCH = "http://localhost:8080/customer/search";
  constructor(private httpClient: HttpClient) { }
  getAllCustomer():Observable<ICustomer>{
    return this.httpClient.get<ICustomer>(this.URL + 'list');
  }
  getCustomerById(id:string):Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.URL + 'getInformation/' + id);
  }
  deleteCustomer(id:string):Observable<ICustomer>{
    return this.httpClient.delete<ICustomer>(this.URL+'delete/'+id);
  }
  createCustomer(customer: DtoCustomer):Observable<DtoCustomer>{
    return this.httpClient.post<DtoCustomer>(this.URL + 'create', customer);
  }
  updateCustomer(customer:DtoCustomer):Observable<DtoCustomer>{
    return this.httpClient.put<DtoCustomer>(this.URL+'edit',customer);
  }
  searchPageCustomer(pageNumber: number, key:string):Observable<any>{
    return this.httpClient.get<any>(this.URL_SEARCH + '?page='+ pageNumber +'&key=' + key);
  }
}
