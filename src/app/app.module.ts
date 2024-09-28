import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterCatalogoComponent } from './catalogo/footer-catalogo/footer-catalogo.component';
import { NavCatalogoComponent } from './catalogo/nav-catalogo/nav-catalogo.component';
import { MainCatalogoComponent } from './catalogo/main-catalogo/main-catalogo.component';
import { CarouselCatalogoComponent } from './catalogo/carousel-catalogo/carousel-catalogo.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './catalogo/home/home.component';
import { ProductsDetailsComponent } from './catalogo/products-details/products-details.component';
import { ComputadoraComponent } from './catalogo/categories/computadora/computadora.component';
import { AdminitracionProductosComponent } from './administracion/inventarioProductos/adminitracion-productos/adminitracion-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductosComponent } from './administracion/inventarioProductos/create-productos/create-productos.component';
import { EditProductosComponent } from './administracion/inventarioProductos/edit-productos/edit-productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarShoppingComponent } from './catalogo/car-shopping/car-shopping.component';
import { PanelPrincipalComponent } from './administracion/panel-principal/panel-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterCatalogoComponent,
    NavCatalogoComponent,
    MainCatalogoComponent,
    CarouselCatalogoComponent,
    SignUpUserComponent,
    LoginUserComponent,
    HomeComponent,
    ProductsDetailsComponent,
    ComputadoraComponent,
    AdminitracionProductosComponent,
    CreateProductosComponent,
    EditProductosComponent,
    CarShoppingComponent,
    PanelPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
