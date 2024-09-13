import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
import { Product, productsList } from '../main-catalogo/products.mock';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailsComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.ListarProductos().subscribe(
      (data) => {
        this.productos = data.map(producto => ({
          ...producto,
          categoria_id: producto.categoria_id,
          imagen: producto.imagen,
          descripcion: producto.descripcion,
          modelo: producto.modelo,
          marca: producto.marca,
          precio: producto.precio,
          stock: producto.stock,
          garantia: producto.garantia
        }));
        console.log(this.productos);
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }
  
  loading: boolean = false
/* 
  ngOnInit(): string | number | void {
    setTimeout(() => {
      this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['computadorasId'])
        this.loading = false;
      });
    }, 1500);   
  }
   */
}
