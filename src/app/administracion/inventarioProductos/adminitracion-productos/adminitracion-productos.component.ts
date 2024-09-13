import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-adminitracion-productos',
  templateUrl: './adminitracion-productos.component.html',
  styleUrls: ['./adminitracion-productos.component.css']
})

export class AdminitracionProductosComponent {
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
  eliminarProducto(id: number): void {
    this.productoService.EliminarProducto(id).subscribe(
      () => {
        this.obtenerProductos(); // Vuelve a cargar la lista de productos después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el producto', error);
      }
    );
  }
}
