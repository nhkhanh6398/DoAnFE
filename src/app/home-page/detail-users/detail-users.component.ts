import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IProduct} from "../../interface-entity/IProduct";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {AlertService} from "../../alert.service";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {ICategories} from "../../interface-entity/ICategories";
import {RegistrationComponent} from "../registration/registration.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.css']
})
export class DetailUsersComponent implements OnInit {
  totalNumber: number = 0;
  searchProduct!: FormGroup;
  customer: any;
  username: string = '';
  listCategories: ICategories[]=[];
  constructor(private productService: ProductService,private customerService:CustomerService,private cartService: CartService,private alertService: AlertService,
              private loginService:LoginService, private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.username = this.loginService.getUserName();
    this.totalNumber = this.cartService.getSoLuongGioHang();
    this.productService.getAllCategories().subscribe((data)=>{
      this.listCategories = data;
    });
    this.searchProduct = new FormGroup({
      key: new FormControl('')
    });
    this.customerService.getCustomerByAccount(this.username).subscribe((data)=>{
      console.log(this.username);
      this.customer = data;
      console.log(this.customer);
    })

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
