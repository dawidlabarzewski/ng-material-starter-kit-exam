import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CreateProductComponentModule } from './components/create-product/create-product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesComponent }, { path: 'add-product', component: CreateProductComponent }, { path: 'products-list', component: ProductsListComponent }, { path: 'products/:id', component: ProductDetailComponent }]), CategoriesComponentModule, CategoryServiceModule, CreateProductComponentModule, ProductServiceModule, ProductsListComponentModule, ProductDetailComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
