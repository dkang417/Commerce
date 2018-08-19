import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services';
import { Product } from '../../product';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  products: Product[] = [];

  id;

  product = {
    name: '',
    qty: 0,
    price: 0
  };
  registrationErrors: string[] = [];
  sub: Subscription;

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      // console.log(this.id);
      const observer = this.productService.getProduct(this.id);
      observer.subscribe(
        (response) => {
          // console.log('get product', response);
          this.product = response;
        },
        (Error) => {
          console.log('error', Error);
        });
    });

    this.sub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }


  // reset form
  reset(productForm) {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      const observer = this.productService.getProduct(this.id);
      observer.subscribe(
        (response) => {
          this.product = response;
        },
        (Error) => {
          console.log('error', Error);
        });
    });
    productForm.reset( { name: this.product.name, qty: this.product.qty, price: this.product.price });
  }

  onUpdate(productToUpdate: Product) {
    event.preventDefault();
    console.log('updating product', this.id);
    this.sub = this.productService.updateProduct(productToUpdate._id, productToUpdate).subscribe(product => {
      console.log('update this product', product);
      // update products
      this.sub = this.productService.getProducts().subscribe(products => {
        this.products = products;
        this.router.navigateByUrl('/products');
      });
    },
    error => {
      console.log('this is our error', error);
      this.registrationErrors = error.error;
      });
  }

}
