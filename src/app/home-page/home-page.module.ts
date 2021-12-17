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






@NgModule({
  declarations: [
    HomeComponent,
    DetailViewProductComponent,
    LoginComponent
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
    NgxImageZoomModule
  ]
})
export class HomePageModule { }
