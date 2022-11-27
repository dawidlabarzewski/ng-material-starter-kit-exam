import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable, switchMap} from 'rxjs';
import { ProductDetailModel } from '../../models/product-detail.model';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";
import {ProductDetailsParamsModel} from "../../models/product-details-params.model";

@Component({
  selector: 'app-product-detail',
  styleUrls: ['./product-detail.component.scss'],
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  readonly params$: Observable<ProductDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(
      params => ({
        id: params['id']
      })
    )
  );

  readonly details$: Observable<ProductDetailModel> = this._activatedRoute.params.pipe(
   switchMap(data => this._productService.getOne(data['id']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }
}
