import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from "./home/home.component";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {RouterModule} from "@angular/router";

import {RouterHomeModule} from "./router-home.module";
import {DetailViewProductComponent} from "./detail-view-product/detail-view-product.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {NgxImageZoomModule} from "ngx-image-zoom";
import {DetailCartComponent} from "./detail-cart/detail-cart.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DetailUsersComponent} from "./detail-users/detail-users.component";
import {PaymentComponent} from "./payment/payment.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {ListOrderComponent} from "./list-order/list-order.component";
import {ChangePassWordComponent} from "./change-pass-word/change-pass-word.component";






@NgModule({
  declarations: [
    HomeComponent,
    DetailViewProductComponent,
    LoginComponent,
    DetailCartComponent,
    DetailUsersComponent,
    RegistrationComponent,
    PaymentComponent,
    ListOrderComponent,
    ChangePassWordComponent
  ],
  exports: [


  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    HeaderFooterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
    RouterHomeModule,
    SlickCarouselModule,
    NgxImageZoomModule,
    NgxSpinnerModule
  ]
})
export class HomePageModule { }
