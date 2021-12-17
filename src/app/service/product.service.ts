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
  readonly URL_SEARCH = "http://localhost:8080/product/search";
  readonly URL_SUPPLIERS = "http://localhost:8080/suppliers/";

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct():Observable<any> {
    return this.httpClient.get<any>(this.URL + 'list');
  }
  getListProduct():Observable<any>{
    return this.httpClient.get<any>(this.URL + 'listAllProduct');
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

  searchPageProduct(pageNumber: number, key: string):Observable<any>{
    return this.httpClient.get<any>(this.URL_SEARCH + '?page='+ pageNumber +'&key=' + key);
  }
  searchProduct(key:string):Observable<any>{
    return this.httpClient.get<any>(this.URL_SEARCH + '?key=' +key);
  }
}
