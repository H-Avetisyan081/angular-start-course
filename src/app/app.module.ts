import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {ModelComponent} from './components/model/model.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {FocusDirective} from './directives/focus.directive';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FilterCategoryPipe} from "./pipes/filter-category.pipe.";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FilterProductsPipe,
    FilterCategoryPipe,
    ModelComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
