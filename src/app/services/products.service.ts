import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  product:IProduct[]=[]


  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject:{limit:25}
      })
    }).pipe(
      delay(80),
      retry(2),
      tap(products=>
        this.product= products
      ),
      catchError(this.errorHandler.bind(this))
    )

  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  create(product:IProduct):Observable<IProduct>{
   return this.http.post<IProduct>('https://fakestoreapi.com/products',product)
     .pipe(tap(prod=> this.product.push(prod)))
  }
}
