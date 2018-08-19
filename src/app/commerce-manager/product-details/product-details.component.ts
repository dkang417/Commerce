import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services';
import { Product } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: Product[] = [];
  id;
  product = {
    name: '',
    qty: 0,
    price: 0
  };
  errorMessage: string;

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      const observer = this.productService.getProduct(this.id);
      observer.subscribe(
        (response) => {
          console.log('get product', response);
          this.product = response;
        },
        (Error) => {
          console.log('error', Error);
        });
    });
  }

  // delete product
  onDelete(productToDelete: Product) {
    console.log('deleting product', productToDelete);
    this.productService.deleteProduct(productToDelete)
      .subscribe(
        deletedProduct => {
          console.log('deleted product', deletedProduct);
          this.products = this.products.filter(product => product._id !== deletedProduct._id);
          this.router.navigateByUrl('/products');
      },
      error => {
        console.log('error', error);
        this.errorMessage = error.statusText;
      }
      );
  }

}
