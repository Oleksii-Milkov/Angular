import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './products/data.service';
import { HttpClientModule } from '@angular/common/http';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ProductsComponent,
      AdminComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      TextareaAutosizeModule,
      ReactiveFormsModule
   ],
   providers: [ DataService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
