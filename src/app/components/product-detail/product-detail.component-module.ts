import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './product-detail.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [RouterModule, MatCardModule, CommonModule],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
