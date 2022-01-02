import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interface-entity/IProduct";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../service/cart.service";
import {AlertService} from "../../alert.service";
import {LoginService} from "../../service/login.service";
import {ICategories} from "../../interface-entity/ICategories";
import {RegistrationComponent} from "../registration/registration.component";
import {CustomerService} from "../../service/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  product!: IProduct;
  listProduct: IProduct[] = [];
  productId: string = "";
  myThumbnail = "";
  totalNumber: number = 0;
  searchProduct!: FormGroup;
  username: string ='';
  listCategories: ICategories[]=[];
  constructor( private router: Router, private activatedRoute: ActivatedRoute,
              private productService: ProductService, private loginService: LoginService, private customerService: CustomerService,
              private cartService: CartService,  private alertService: AlertService,
              private route: ActivatedRoute, private dialog: MatDialog, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.username = this.loginService.getUserName();
    this.totalNumber = this.cartService.getSoLuongGioHang();
    this.productService.getAllCategories().subscribe((data)=>{
      this.listCategories = data;
    });
    this.searchProduct = new FormGroup({
      key: new FormControl('')
    })
    this.activatedRoute.paramMap.subscribe((paramap) => {
      // @ts-ignore
      this.productId = paramap.get('id');
      console.log("đây là id " + this.productId);
      if (this.productId != null) {
        this.getProduct(this.productId);
      }
    })
  }

  getProduct(id: string) {
    console.log("đây là id " + id);
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.myThumbnail = data.productImage;
    })
  }

  add(productId: string, productName: string, productPrice: number) {
    // this.cartService.addToGioHang(productId, productName, productPrice);
    this.alertService.showAlertSuccess("Thêm giỏ hàng thành công");
    this.ngOnInit();
  }

  search() {
    this.productService.key = this.searchProduct.value.key;
    this.router.navigateByUrl("/home").then();
  }

  logOut() {
    this.loginService.removeToken();
    this.loginService.removeUserName();
    this.loginService.removeRole();
    this.router.navigateByUrl("/login").then();
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

  openRegistration() {
    this.customerService.getAllAccount().subscribe(data => {
      const dialog = this.dialog.open(RegistrationComponent, {
        width: '1000px',
        height: '100%',
        disableClose: false,
        autoFocus: false,
        data: data
      });
      dialog.afterClosed().subscribe(result => {
        this.ngOnInit();
      })
    });
  }

  searchByCategories(categoryName: any) {
    this.productService.key = categoryName;
    this.router.navigateByUrl("/home").then();
  }
}
