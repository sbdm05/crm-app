import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'/sign-in', pathMatch: 'full' }, 
  {path:'sign-in', component : PageSignInComponent},
  {path:'reset-password', component : PageResetPasswordComponent},
  {path:'sign-in', component : PageSignInComponent},
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }, 
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  }, 
    {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    private router : Router
    ){
    console.log(this.router.config)
  }
}
