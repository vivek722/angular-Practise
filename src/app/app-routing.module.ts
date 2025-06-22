import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const  routes: Routes = [

  {path:'',redirectTo:'LoginModule',pathMatch:'full'},
  {
    path: 'LoginModule',
    loadChildren: () =>
      import('../app/employee-authentication/employee-authentication.module').then(
        (m) => m.EmployeeAuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
