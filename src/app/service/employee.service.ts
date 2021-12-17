import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../interface-entity/IEmployee";
import {DtoEmployee} from "../interface-entity/DtoEmployee";
import {IPosition} from "../interface-entity/IPosition";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly URL= "http://localhost:8080/employee/";
  readonly URL_SEARCH = "http://localhost:8080/employee/search";
  constructor(private httpClient: HttpClient) { }
  getAllEmployee():Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.URL+'list');
  }
  getListPosition():Observable<IPosition[]>{
    return this.httpClient.get<IPosition[]>(this.URL+'position');
  }
  getEmployeeById(id:string):Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.URL+'getInformation/'+id);
  }
  deleteEmployee(id:string):Observable<IEmployee>{
    return this.httpClient.delete<IEmployee>(this.URL+'delete/'+id);
  }
  createEmployee(employee: DtoEmployee):Observable<DtoEmployee>{
    return this.httpClient.post<DtoEmployee>(this.URL + 'create', employee);
  }
  updateEmployee(employee:DtoEmployee):Observable<DtoEmployee>{
    return this.httpClient.put<DtoEmployee>(this.URL+'edit',employee);
  }
  getPageProduct(number: number):Observable<any> {
    return this.httpClient.get<any>(this.URL + 'list?page='+number);
  }
  searchPageEmployee(pageNumber: number,key: string):Observable<any>{
    return this.httpClient.get<any>(this.URL_SEARCH + '?page='+pageNumber + '&key='+key);
  }
  searchEmployee(key:string):Observable<any>{
    return this.httpClient.get<any>(this.URL_SEARCH + '?key='+key);
  }
}
