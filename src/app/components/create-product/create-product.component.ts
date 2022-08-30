import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService,
              private modalService: ModalService) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0)
    ]),
    description: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(10)
    ]),


  })
 get description(){
    return this.form.controls.description as FormControl
 }

  get title() {
    return this.form.controls.title as FormControl
  }
  get price(){
    return this.form.controls.price as FormControl
  }


  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)
    this.productService.create(
      {
        title: this.form.value.title as string,
        price: this.form.value.price as number,
        description: this.form.value.description as string,
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 42.4,
          count: 10
        }
      }).subscribe(() => {
      this.modalService.close()
    })
  }

}
