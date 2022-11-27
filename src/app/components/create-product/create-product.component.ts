import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  styleUrls: ['./create-product.component.scss'],
  templateUrl: './create-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent {
  readonly createProductForm: FormGroup = new FormGroup({title: new FormControl(), price: new FormControl()});

  constructor(private _productService: ProductService, private router: Router) {
  }

  onCreateProductFormSubmitted(createProductForm: FormGroup): void {
    this._productService.create(
      {
        title: createProductForm.get('title')?.value,
        price: createProductForm.get('price')?.value
      }
    ).subscribe(
      () => {
        this.router.navigate(['/categories'])
      }
    );
  }
}
