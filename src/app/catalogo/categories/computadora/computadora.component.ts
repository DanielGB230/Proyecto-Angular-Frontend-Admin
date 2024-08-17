import { Component } from '@angular/core';
import { productsList } from '../../main-catalogo/products.mock';

@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.component.html',
  styleUrls: ['./computadora.component.css']
})
export class ComputadoraComponent {
  productList = productsList;
}
