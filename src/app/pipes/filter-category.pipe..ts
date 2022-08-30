import {Pipe, PipeTransform} from "@angular/core";
import {IProduct} from "../models/product";

@Pipe({
  name:'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform{

  transform(products:IProduct[], search:string): IProduct[] {
    if(search.length===0) return products
    return products.filter(p=> p.category.toLowerCase().includes(search.toLowerCase()))
  }
}
