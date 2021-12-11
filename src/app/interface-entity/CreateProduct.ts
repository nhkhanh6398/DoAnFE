import {ICategories} from "./ICategories";
import {ISuppliers} from "./ISuppliers";

export class CreateProduct {
  productId: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productImage: string;
  categoriesId: ICategories;
  suppliersId: ISuppliers;


  constructor(productId: string, productName: string, productQuantity: number, productPrice: number, productImage: string, categoriesId: ICategories, suppliersId: ISuppliers) {
    this.productId = productId;
    this.productName = productName;
    this.productQuantity = productQuantity;
    this.productPrice = productPrice;
    this.productImage = productImage;
    this.categoriesId = categoriesId;
    this.suppliersId = suppliersId;
  }

}
