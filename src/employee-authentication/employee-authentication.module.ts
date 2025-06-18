import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAuthenticationRoutingModule } from './employee-authentication-routing.module';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';


@NgModule({
  declarations: [
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule,
    EmployeeAuthenticationRoutingModule
  ]
})
export class EmployeeAuthenticationModule { }
