import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';

const routes: Routes = [
  {path : '', component:EmployeeComponent},
  {path : 'create', component:CreateComponent},
  {path : 'create/:id', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
