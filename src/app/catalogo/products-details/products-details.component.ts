import { Component, OnInit } from '@angular/core';
import { Product, productsList } from '../main-catalogo/products.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product?: Product;
  productList: Product[] = productsList;
  loading: boolean = true

  constructor(private _route: ActivatedRoute){
    
  }
  
  ngOnInit(): string | number | void {
    setTimeout(() => {
      this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['computadorasId'])
        this.loading = false;
      });
    }, 1500);   
  }
}
