import {IProduct} from "./IProduct";
import {UpdateProduct} from "./UpdateProduct";
import {DtoProduct} from "./DtoProduct";

export interface DtoOrder {
  ordersId:number;
  idProduct: DtoProduct[];
  account: string;



}
