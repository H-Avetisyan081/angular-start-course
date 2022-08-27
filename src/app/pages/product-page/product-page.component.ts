import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = 'SHOP ONLINE'
  // products: IProduct[] = []
  // produktneri masivov kvercne
  loading = false
  products$:Observable<IProduct[]>
  therm=''


  constructor(public productService: ProductsService,
              public modalService:ModalService
  ) {
  }

  ngOnInit(): void {
    // this.loading = true
    // this.products$=this.productService.getAll()
    //   .pipe(tap(()=>this.loading=false))//streamov kvercne
    this.productService.getAll().subscribe( ()=> {
      this.loading = false
    })
  }

}
