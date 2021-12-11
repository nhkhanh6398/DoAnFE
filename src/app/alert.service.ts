import { Injectable } from '@angular/core';

import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AlertService {

 

  constructor(
    private toast: ToastrService
  ) { }

  showAlertSuccess(message: string) {
    this.toast.success(message, 'Thông báo: ');
  }
  showAlertError(message: string) {
    this.toast.error(message, 'Thông báo: ');
  }


}
