import { Component } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.component.html',
  styleUrls: ['./computadora.component.css']
})
export class ComputadoraComponent {
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
}
