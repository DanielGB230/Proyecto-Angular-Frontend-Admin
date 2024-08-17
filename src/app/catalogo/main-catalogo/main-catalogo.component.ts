import { Component } from '@angular/core';
import { productsList } from './products.mock';

@Component({
  selector: 'app-main-catalogo',
  templateUrl: './main-catalogo.component.html',
  styleUrls: ['./main-catalogo.component.css']
})
export class MainCatalogoComponent {
  productList = productsList;
}
