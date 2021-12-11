import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductModule} from "./product/product.module";
import {CustomerModule} from "./customer/customer.module";
import {EmployeeModule} from "./employee/employee.module";
import {HeaderComponent} from './header-footer/header/header.component';

import {HeaderFooterModule} from "./header-footer/header-footer.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {HomePageModule} from "./home-page/home-page.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {ListProductComponent} from "./product/list-product/list-product.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {RouterHomeModule} from "./home-page/router-home.module";
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    ListProductComponent,
    CreateProductComponent,
    HeaderComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CustomerModule,
    EmployeeModule,
    HeaderFooterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomePageModule,
    ToastrModule.forRoot(),
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterHomeModule,
    SlickCarouselModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
