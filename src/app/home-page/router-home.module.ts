import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {DetailViewProductComponent} from "./detail-view-product/detail-view-product.component";

const routes: Routes = [
  {path:"detail-product/:id",component: DetailViewProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RouterHomeModule { }
