import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsListComponent } from './products-list.component';
import { RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule, RouterModule],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
