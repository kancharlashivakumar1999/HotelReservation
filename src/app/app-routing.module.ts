import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin/admin.component';
import { LoginComponent } from './Log/login/login.component';

const routes: Routes = [{
  path:"admin",component:AdminComponent
},
{
  path:"",component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
