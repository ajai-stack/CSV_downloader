import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {ngxCsv}from 'ngx-csv/ngx-csv'
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{
  EmployeeList:any;

  constructor( private service:EmployeeService){
    
  }
  ngOnInit(){
   this.getcon();
  }
  getcon(){
    this.service.getregister().subscribe((res)=>{
      this.EmployeeList=res;
    })
  }
exportCSV(){
  var options = { 
    title: 'Employee Details',
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false, 
    showTitle: false,
    useBom: false,
    noDownload: false,
    headers: ["firstname", "lastname", "email","password","mobilenumber"]
  };
  new ngxCsv(this.EmployeeList,"report",options)
}







}
export class EmployeeList{
  firstname:any;
  lastname:any;
  email:any;
  password:any;
  mobilenumber:any;
  }