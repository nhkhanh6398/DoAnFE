import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../interface-entity/IProduct";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  listCart: any = "";
  toltal: number = 0;
  createPayment!: FormGroup;
  ordersId!: number;
  orderProduct: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private productService: ProductService, private loginService: LoginService, private customerService: CustomerService,
              private cartService: CartService, private alertService: AlertService,
              private route: ActivatedRoute, private dialog: MatDialog,
              private spinner: NgxSpinnerService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.createPayment = new FormGroup({
      ordersId: new FormControl(""),
      idProduct: new FormControl(""),
      account: new FormControl(""),
      userName: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern('^(\\d{10,12})$')]),
      total: new FormControl("", [Validators.required]),
    });
    this.createPayment.patchValue({
      account: this.loginService.getUserName(),
      total: this.getTotal()
    })
  }

  getTotal() {
    this.listCart = this.cartService.getListGioHang();
    for (let i = 0; i < this.listCart.length; i++) {
      this.toltal += this.listCart[i].gia * this.listCart[i].soLuong;
    }
    return this.toltal;
  }

  create() {
    const value = this.createPayment.value;
    if (value.account == ""){
      this.alertService.showAlertError("Bạn phải đăng nhập để đặt hàng");
      this.router.navigate(['/login']);
    }
    if (this.createPayment.valid) {
      this.ordersId = Math.floor(Math.random() * 10000);
      var listProduct = this.cartService.getListGioHang();
      this.orderProduct = {
        ordersId: this.ordersId,
        idProduct: listProduct,
        account: value.account,
        userName: value.userName,
        address: value.address,
        phone: value.phone,
        total: value.total,
      }
      this.orderService.setOrder(this.orderProduct).subscribe((data) => {
        this.alertService.showAlertSuccess("Đăng kí mua hàng thành công");
      })
    }

  }
}
