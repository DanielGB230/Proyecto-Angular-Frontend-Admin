import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
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
  
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute, // Inyecta ActivatedRoute para acceder al ID de la URL
    private productoService: ProductoService // Inyecta el servicio
  ) {}

  ngOnInit(): void {
    this.ObtenerProductoPorID();
  }
  

  ObtenerProductoPorID(): void {
    // Obtiene el 'id' de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Llama al servicio para obtener el producto por ID
    // Verifica que el ID es válido
    if (!isNaN(id) && id > 0) {
      // Llama al servicio para obtener el producto por ID
      this.productoService.ObtenerProducto(id).subscribe(
        (data: Producto) => {
          this.producto = data; // Asigna los datos del producto a la variable
          console.log(this.producto); // Verifica los datos en la consola
        },
        (error) => {
          console.error('Error al obtener el producto', error); // Muestra el error en consola si ocurre
        }
      );
    } else {
      console.error('ID de producto inválido:', id);
    }
  }


  changeImage(element: HTMLImageElement): void {
    const mainImage = document.getElementById('main-image') as HTMLImageElement;
    
    if (mainImage) {
      mainImage.src = element.src;
    }

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail) => {
      if (thumbnail instanceof HTMLElement) {
        thumbnail.classList.remove('selected');
      }
    });

    element.classList.add('selected');
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
