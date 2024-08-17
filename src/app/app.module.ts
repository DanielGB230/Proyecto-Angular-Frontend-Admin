import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ComputadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
