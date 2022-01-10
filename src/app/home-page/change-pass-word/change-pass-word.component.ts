import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DtoCustomer} from "../../interface-entity/DtoCustomer";
import {CustomerService} from "../../service/customer.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AlertService} from "../../alert.service";
import {DtoAccount} from "../../interface-entity/DtoAccount";

@Component({
  selector: 'app-change-pass-word',
  templateUrl: './change-pass-word.component.html',
  styleUrls: ['./change-pass-word.component.css']
})
export class ChangePassWordComponent implements OnInit {
  updateCustomer!: FormGroup;
  customerEdit!: DtoAccount;
  constructor(private customerService: CustomerService,private dialog: MatDialogRef<ChangePassWordComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private alertService: AlertService) { }

  ngOnInit(): void {
    this.updateCustomer = new FormGroup({
      idCustomer : new FormControl("",[Validators.required]),
      account : new FormControl("",[Validators.required]),
      passwork : new FormControl("",[Validators.required]),
      dateCreate : new FormControl("",[Validators.required]),
    });
    this.customerService.getAccount(this.data.account).subscribe((data)=>{
      this.updateCustomer.patchValue({
        idCustomer: data.customers.idCustomer,
        account: data.account,
        passwork: '',
        dateCreate: data.dateCreate
      });
    })
  }
  create() {
    if (this.updateCustomer.valid) {
      const value = this.updateCustomer.value;
      this.customerEdit = new DtoAccount(value.account,value.passwork,value.dateCreate,value.idCustomer);
      this.customerService.changePassWord(this.customerEdit).subscribe((data) => {
        this.dialog.close();
        this.alertService.showAlertSuccess("Sửa thành công");
      })
    }
  }
}
