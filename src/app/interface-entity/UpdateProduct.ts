export class UpdateProduct {
  productId: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productImage: string;
  categoriId: number;
  suppliersId: number;

  constructor(productId: string, productName: string, productQuantity: number, productPrice: number, productImage: string, categoriId: number, suppliersId: number) {
    this.productId = productId;
    this.productName = productName;
    this.productQuantity = productQuantity;
    this.productPrice = productPrice;
    this.productImage = productImage;
    this.categoriId = categoriId;
    this.suppliersId = suppliersId;
  }
}
