import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interface-entity/IProduct";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-view-product',
  templateUrl: './detail-view-product.component.html',
  styleUrls: ['./detail-view-product.component.css']
})
export class DetailViewProductComponent implements OnInit {

  slides = [
    {img: "https://via.placeholder.com/600.png/09f/fff"},
    {img: "https://via.placeholder.com/600.png/021/fff"},
    {img: "https://via.placeholder.com/600.png/321/fff"},
    {img: "https://via.placeholder.com/600.png/422/fff"},
    {img: "https://via.placeholder.com/600.png/654/fff"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }


  beforeChange(e: any) {
    console.log('beforeChange');
  }
  listProduct: IProduct[]= [];
  idProduct: string = "";

  constructor(private productService: ProductService,private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.idProduct = this.route.snapshot.paramMap.get('productId');
    this.productService.getAllProduct().subscribe((data)=>{
      this.listProduct = data.content;
    })
  }

}
