import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {IEmployee} from "../../interface-entity/IEmployee";
import {MatDialog} from "@angular/material/dialog";
import {DetailEmployeeComponent} from "../detail-employee/detail-employee.component";
import {EditEmployeeComponent} from "../edit-employee/edit-employee.component";
import {DeleteEmployeeComponent} from "../delete-employee/delete-employee.component";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  listEmployee: IEmployee[] = [];
  indexPagination: number = 1;
  totalPagination: number = 0;

  constructor(private employeeService: EmployeeService,private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getListEmployee();
  }

  getListEmployee() {
    this.employeeService.getAllEmployee().subscribe((data) => {
        // @ts-ignore
        this.listEmployee = data.content;
        this.totalPagination = data.totalPages;
      },
      () => {
        console.log("Lỗi get list employee");
      },
      () => {
        console.log("Get list employee thành công");
      })
  }

  openDialogDetail(id: string) {
  this.employeeService.getEmployeeById(id).subscribe((data)=>{
    const dialog = this.dialog.open(DetailEmployeeComponent,{
      width: '500px',
      data: data,
      disableClose: true,
      autoFocus: false
    });
    dialog.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  })
  }

  openDialogEdit(id: string) {
    this.employeeService.getEmployeeById(id).subscribe((data)=>{
      const dialog = this.dialog.open(EditEmployeeComponent,{
        width: '500px',
        data: data,
        disableClose: true,
        autoFocus: false
      });
      dialog.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    })
  }
  getPage(number: number) {
    this.employeeService.getPageProduct(number).subscribe(data=>{
      this.listEmployee = data.content;
      this.indexPagination = data.pagealbe.pageNumber +1;
    })
  }
  openDialogDelete(id: string) {
    this.employeeService.getEmployeeById(id).subscribe((data)=>{
      const dialog = this.dialog.open(DeleteEmployeeComponent,{
        width: '500px',
        data: data,
        disableClose: true,
        autoFocus: false
      });
      dialog.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    })
  }
}
