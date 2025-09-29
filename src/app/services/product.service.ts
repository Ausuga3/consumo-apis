import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com';

  getProducts(): Observable<Product[]> {
      return this.http.get<any[]>(`${this.apiUrl}/products`)
      .pipe(
            map(products => products.map(product => ({
              id: product.id,
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              image: product.image,
              rating: product.rating
            }))),
            retry(3),
          )
    }

  deleteProduct(id:number):  Observable<any>{
    return this.http.delete<Product>(`${this.apiUrl}/products/${id}`)
  }  

 
  }

