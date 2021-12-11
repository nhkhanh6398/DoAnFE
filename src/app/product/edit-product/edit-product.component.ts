import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ICategories} from "../../interface-entity/ICategories";
import {ISuppliers} from "../../interface-entity/ISuppliers";
import {UpdateProduct} from "../../interface-entity/UpdateProduct";
import {validSelectValidators} from "../../validator/valid-select.validators";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProduct!: FormGroup;

  categoryList!: ICategories[];
  suppliersList!: ISuppliers[];
  productEdit!: UpdateProduct;


  constructor(private router: Router,
              private productService: ProductService,
              private dialog: MatDialogRef<EditProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((data) => {
      this.categoryList = data;
    });
    this.productService.getAllSuppliers().subscribe((data) => {
      this.suppliersList = data;
    });
    this.editProduct = new FormGroup({
      productId: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required]),
      productQuantity: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required]),
      productImage: new FormControl(''),
      categories: new FormControl(0,[validSelectValidators()]),
      suppliers: new FormControl(0,[validSelectValidators()])
    });
    this.productService.getProductById(this.data.productId).subscribe((data) => {
      this.editProduct.controls.productId.setValue(data.productId);
      this.editProduct.controls.productName.setValue(data.productName);
      this.editProduct.controls.productPrice.setValue(data.productPrice);
      this.editProduct.controls.productQuantity.setValue(data.productQuantity);
      // this.editProduct.controls.productImage.setValue(data.productImage);
      this.editProduct.controls.categories.setValue(data.categories.categoryId);
      this.editProduct.controls.suppliers.setValue(data.suppliers.suppliersId);
      console.log(this.editProduct);
    });
  };

  onEditProduct() {

    if (this.editProduct.valid) {
      console.log(this.editProduct.value);
      const value = this.editProduct.value;
      this.productEdit = new UpdateProduct(value.productId,value.productName,value.productQuantity,value.productPrice,
        value.productImage,value.categories,value.suppliers);
      this.productService.updateProduct(this.productEdit).subscribe((data) => {
        this.dialog.close();
      })
    }
  }
}
