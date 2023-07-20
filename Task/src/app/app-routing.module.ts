import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:EmpRegisterComponent},
  {path:'details',component:EmpDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
