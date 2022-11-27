import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProductModel } from '../models/create-product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: CreateProductModel): Observable<CreateProductModel> {
    return this._httpClient.post<CreateProductModel>('https://fakestoreapi.com/products', {
      title: product.title,
      price: product.price
    });
  }
}
