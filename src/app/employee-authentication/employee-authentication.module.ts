import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAuthenticationRoutingModule } from './employee-authentication-routing.module';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
@NgModule({
  declarations: [
    EmployeeRegisterComponent,
    EmployeeLoginComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeAuthenticationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers:[
    
  ]
})
export class EmployeeAuthenticationModule { }
