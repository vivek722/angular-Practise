import { Component, OnInit } from '@angular/core';
import { EmployeeLoginService } from '../Auth-Services/employee-login.service';
import { login } from '../Authentication-Model/employeeLogin';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { TosterMessageService } from '../../shared/Services/toster.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})
export class EmployeeLoginComponent implements OnInit{
  

  constructor(private login_Service:EmployeeLoginService,private formbuilder:FormBuilder,private Toster_service:TosterMessageService){}
  Logindata:FormGroup  = new FormGroup({});

  ngOnInit(): void {
    this.Logindata= this.formbuilder.group({
      firstName:['',Validators.required],
      Password:['',Validators.required]
    })
  }


  public employeeLogin(){
    if(this.Logindata?.valid)
    {
        var Login = this.Logindata.getRawValue();
        this.login_Service.loginData(Login).subscribe((res)=>{
          if(res)
          {
            this.Toster_service.Success("Login SuccessFull")
          }
        })
    }
  }
}
