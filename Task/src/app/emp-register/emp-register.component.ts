import { Component,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit{

  ngForm:any
  submit=false;
  data:any; 
  constructor(private formbulider:FormBuilder, private service:EmployeeService){
  }

  ngOnInit() {
    this.ngForm= this.formbulider.group({      
      firstname: ["",Validators.required],
      lastname : ["",Validators.required],
      email : ["",[Validators.required,Validators.email]],
      password : ["",Validators.required],
      mobilenumber :  ["",Validators.required]
    })
  }

  get fn() {
    return this.ngForm.controls;}

  Onclick(data:any){
    this.submit=true;
    if(this.ngForm.invalid){
      return;
    }else{
      this.service.postdata(data).subscribe(res=>{
        res;
        alert('register successfully')
        window.location.reload()
          })
    }
    }
  }
  
