import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../shared/services';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  sub: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    // get all products
    this.sub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
