import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from "./home/home.component";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {RouterModule} from "@angular/router";

import {RouterHomeModule} from "./router-home.module";
import {DetailViewProductComponent} from "./detail-view-product/detail-view-product.component";
import {SlickCarouselModule} from "ngx-slick-carousel";






@NgModule({
  declarations: [
    HomeComponent,
    DetailViewProductComponent,
  ],
  exports: [


  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    HeaderFooterModule,
    RouterModule,
    RouterHomeModule,
    SlickCarouselModule
  ]
})
export class HomePageModule { }
