import {Component, Inject, OnInit} from '@angular/core';
import {IProduct} from "../../interface-entity/IProduct";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detail-view-product',
  templateUrl: './detail-view-product.component.html',
  styleUrls: ['./detail-view-product.component.css']
})
export class DetailViewProductComponent implements OnInit {
product!: IProduct;
  productId: string = "";
  myThumbnail="";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  constructor(private productService: ProductService,private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((paramap)=>{
     // @ts-ignore
     this.productId = paramap.get('id');
     console.log("đây là id "+ this.productId);
     if (this.productId != null) {
       this.getProduct(this.productId);
     }
   })
  }
  getProduct(id: string){
    console.log("đây là id "+id);
    this.productService.getProductById(id).subscribe((data)=>{
      this.product = data;
      this.myThumbnail = data.productImage;
    })
  }
}
