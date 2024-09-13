import { AfterViewInit, Component, Injectable } from '@angular/core';
import { productsList } from './products.mock';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-main-catalogo',
  templateUrl: './main-catalogo.component.html',
  styleUrls: ['./main-catalogo.component.css'] 
})
@Injectable({
  providedIn: 'root',
})

export class MainCatalogoComponent implements AfterViewInit{
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

  ngAfterViewInit(): void {
    const button = document.querySelector('.chat-button') as HTMLElement | null;
    const modal = document.getElementById('chatModal') as HTMLElement | null;
    const closeButton = document.querySelector('.close-button') as HTMLElement | null;

    if (button && modal && closeButton) {
      // Mostrar/ocultar modal al hacer clic en el botón
      button.addEventListener('click', (e: Event) => {
        e.preventDefault();
        modal.classList.toggle('hidden');
      });

      // Cerrar modal al hacer clic en el botón de cerrar
      closeButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        modal.classList.add('hidden');
      });
    } else {
      console.error('No se encontraron algunos elementos necesarios en el DOM.');
    }
  }
}
