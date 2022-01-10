import {IAccount} from "./IAccount";

export interface IOrder {
  ordersId:number,
  orderDate: Date,
  address:string,
  userName:string,
  phone:string,
  total: number
  account:IAccount
}
