import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './catalogo/home/home.component';
import { ProductsDetailsComponent } from './catalogo/products-details/products-details.component';
import { ComputadoraComponent } from './catalogo/categories/computadora/computadora.component';
import { AdminitracionProductosComponent } from './administracion/inventarioProductos/adminitracion-productos/adminitracion-productos.component';
import { CreateProductosComponent } from './administracion/inventarioProductos/create-productos/create-productos.component';
import { EditProductosComponent } from './administracion/inventarioProductos/edit-productos/edit-productos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'sign-up', component: SignUpUserComponent},
  {path: 'computadoras', component: ComputadoraComponent},
  {path: 'computadoras/:computadoraId', component: ProductsDetailsComponent},
  {path: 'administracion/productos', component: AdminitracionProductosComponent},
  {path: 'administracion/productos/crear', component: CreateProductosComponent},
  {path: 'administracion/productos/editar/:computadorasId', component: EditProductosComponent},
  {path: '**', redirectTo: '',pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}