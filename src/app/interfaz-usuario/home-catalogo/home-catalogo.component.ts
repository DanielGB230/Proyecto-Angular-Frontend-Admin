import { Component } from '@angular/core';
import { NavCatalogoComponent } from "../nav-catalogo/nav-catalogo.component";
import { BannerCatalogoComponent } from "../banner-catalogo/banner-catalogo.component";
import { ProductosCatalogoComponent } from "../productos-catalogo/productos-catalogo.component";
import { FooterCatalogoComponent } from "../footer-catalogo/footer-catalogo.component";

@Component({
  selector: 'app-home-catalogo',
  standalone: true,
  imports: [NavCatalogoComponent, BannerCatalogoComponent, ProductosCatalogoComponent, FooterCatalogoComponent],
  templateUrl: './home-catalogo.component.html',
  styleUrl: './home-catalogo.component.css'
})
export class HomeCatalogoComponent {

}
