import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CreateProductComponentModule } from './components/create-product/create-product.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesComponent }, { path: 'add-product', component: CreateProductComponent }]), CategoriesComponentModule, CategoryServiceModule, CreateProductComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
