import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./product/list-product/list-product.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {HomeComponent} from "./home-page/home/home.component";
import {DetailProductComponent} from "./product/detail-product/detail-product.component";

const routes: Routes = [
  {path: "product-list",component: ListProductComponent},
  {path: "createProduct",component: CreateProductComponent},
  //employee
  {path: "employee-list",component: ListEmployeeComponent},
  {path: "createEmployee",component: CreateEmployeeComponent},
  //
  //home
  {path:"",component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
