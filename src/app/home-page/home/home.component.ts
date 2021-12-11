import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {IProduct} from "../../interface-entity/IProduct";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  listProduct: IProduct[] = [];
  idProduct: string = "";

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.idProduct = this.route.snapshot.paramMap.get('productId');

    this.productService.getAllProduct().subscribe((data) => {
      this.listProduct = data.content;
    })
  }

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

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

  getDetail() {
    this.router.navigate(['/detail-product', {id: this.idProduct}])
  }
}
