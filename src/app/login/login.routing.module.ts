import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';


const routes: Routes = [
   {path:'sign-in', component : PageSignInComponent},
   {path:'sign-up', component : PageSignUpComponent},
   {path:'reset-password', component : PageResetPasswordComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }