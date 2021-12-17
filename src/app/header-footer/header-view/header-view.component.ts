import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {IProduct} from "../../interface-entity/IProduct";

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent implements OnInit {
  searchProduct!: FormGroup;
  listProduct: IProduct[] = [];
  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
    this.searchProduct = new FormGroup({
      key: new FormControl('')
    })
  }

  search() {
    this.productService.searchProduct(this.searchProduct.value.key).subscribe(data=>{
      this.listProduct = data.content;
    })
  }
}
