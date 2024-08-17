import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './catalogo/home/home.component';
import { ProductsDetailsComponent } from './catalogo/products-details/products-details.component';
import { ComputadoraComponent } from './catalogo/categories/computadora/computadora.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'sign-up', component: SignUpUserComponent},
  {path: 'computadoras', component: ComputadoraComponent},
  {path: 'computadoras/:computadorasId', component: ProductsDetailsComponent},
  {path: '**', redirectTo: '',pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}
