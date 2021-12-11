import {Injectable} from '@angular/core';
import {IProduct} from "../interface-entity/IProduct";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategories} from "../interface-entity/ICategories";
import {ISuppliers} from "../interface-entity/ISuppliers";
import {UpdateProduct} from "../interface-entity/UpdateProduct";
import {CreateProduct} from "../interface-entity/CreateProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product!: IProduct[];
  readonly URL = "http://localhost:8080/product/";
  readonly URL_SUPPLIERS = "http://localhost:8080/suppliers/";

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct():Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.URL + 'list');
  }
  getPageProduct(pageNum: number):Observable<any>{
    return this.httpClient.get<any>(this.URL+'list?page='+pageNum);
  }
  getProductById(id:string):Observable<IProduct>{
    return this.httpClient.get<IProduct>(this.URL+'getInformation/'+id);
  }
  deleteProduct(id:string):Observable<IProduct>{
    return this.httpClient.delete<IProduct>(this.URL + 'delete/' + id);
  }
  createProduct(product: CreateProduct):Observable<CreateProduct>{
    return this.httpClient.post<CreateProduct>(this.URL+'create',product);
  }
  updateProduct(product: UpdateProduct):Observable<UpdateProduct>{
    return this.httpClient.put<UpdateProduct>(this.URL+'edit',product);
  }
  getAllCategories():Observable<ICategories[]>{
    return this.httpClient.get<ICategories[]>(this.URL + 'catagory');
  }
  getAllSuppliers():Observable<ISuppliers[]>{
    return this.httpClient.get<ISuppliers[]>(this.URL_SUPPLIERS+'list');
  }
}
