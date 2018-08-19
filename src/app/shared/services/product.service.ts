import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product} from '../../product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private base = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.base}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.base, product);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.base}/${product._id}/edit`, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${product._id}`);
  }


}

