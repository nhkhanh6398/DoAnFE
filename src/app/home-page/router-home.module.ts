import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {DetailViewProductComponent} from "./detail-view-product/detail-view-product.component";
import {LoginComponent} from "./login/login.component";
import {DetailCartComponent} from "./detail-cart/detail-cart.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DetailUsersComponent} from "./detail-users/detail-users.component";

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"detail-users/:id",component:DetailUsersComponent},
  {path:"detail-cart",component:DetailCartComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RouterHomeModule { }
