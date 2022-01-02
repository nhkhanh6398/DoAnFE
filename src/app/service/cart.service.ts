import { Injectable } from '@angular/core';
import {IProduct} from "../interface-entity/IProduct";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  getListGioHang(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem("cart"));
  }
  setListGioHang(list: any){
    localStorage.setItem('cart',JSON.stringify(list));
  }

  addToGioHang(masp: string, productName: String, price: number,quantity:number){
    var currentList = this.getListGioHang();
    if (!currentList){
      currentList= [];
    }
    var daCo =false;
    for (var sp of currentList){
      if (sp.productId == masp){
        sp.soLuong++;
        daCo = true;
      }
    }
    if(!daCo) {
      currentList.push({
        productId: masp,
        soLuong: quantity,
        tensp: productName,
        gia: price
      })
    }
    this.setListGioHang(currentList);
  }
  xoaSanPham(masp: number){
    var currentList = this.getListGioHang();
    for (var i =0;i<currentList.length;i++){
      if (currentList[i].productId == masp){
        currentList.splice(i,1);
        break;
      }
    }
    this.capNhatMoiThu(currentList);
  };
  capNhatMoiThu(list: any){
    this.setListGioHang(list);
    this.getListGioHang();
  }
  xoaHet(){
    var currentList = this.getListGioHang();
    currentList = [];
    this.capNhatMoiThu(currentList);
  }
  getSoLuongGioHang():number {
    var currentList = this.getListGioHang();

    var soLuong = 0;
    if(currentList != null) {
      for(var sp of currentList) {
        soLuong += sp.soLuong;
      }
    }

    return soLuong;
  }
}
