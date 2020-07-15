import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "products/:id",
    component: ProductDetailComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
