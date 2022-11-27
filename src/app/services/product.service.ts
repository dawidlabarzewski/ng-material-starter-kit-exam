import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProductModel } from '../models/create-product.model';
import { ProductModel } from '../models/product.model';
import { ProductDetailModel } from '../models/product-detail.model';

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

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getOne(id: string): Observable<ProductDetailModel> {
    return this._httpClient.get<ProductDetailModel>(`https://fakestoreapi.com/products/${id}`);
  }
}
