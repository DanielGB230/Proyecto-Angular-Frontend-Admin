import { Injectable } from '@angular/core';
// pedidas de c#
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:5259/api/productos'; // URL de tu API en C#

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  ListarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Obtener un producto por ID
  ObtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  CrearProducto(productos: any): Observable<any> {
    return this.http.post(this.apiUrl, productos);
  }

  // Editar un producto
  ActualizarProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar un producto
  EliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getProductosPorCategoria(categoriaId: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/categoria/${categoriaId}`);
  }

  BuscarProductos(query: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`api/productos/buscar?q=${query}`);
  }
}
