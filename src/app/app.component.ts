import {Component, OnInit} from '@angular/core';
import {IProduct} from './models/product';
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'SHOP ONLINE'
  // products: IProduct[] = []
  // produktneri masivov kvercne
  loading = false
  products$:Observable<IProduct[]>
  therm:''


  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$=this.productService.getAll().pipe(tap(()=>this.loading=false))//streamov kvercne
    // this.productService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }


}
