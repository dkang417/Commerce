import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../shared/services';
import { Product } from '../../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = new Product();
  products: Product[] = [];
  sub: Subscription;
  errorMessage: string;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.product);
    this.sub = this.productService.createProduct(this.product)
      .subscribe(
        product => {
          console.log('product from api is', product);
          form.resetForm();
          // update products list
          this.sub = this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.router.navigateByUrl('/products');
          },
            error => {
              console.log('error', error);
              this.errorMessage = error.statusText;
          }
          );
      });
  }

}
