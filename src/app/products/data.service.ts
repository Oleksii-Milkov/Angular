import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getProductList(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/products");
  }

  public getProductById(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/products/" + id);
  }

  public updateProduct(id: number, name: string, description: string, category: string, price: number){
    return this.http.put("http://localhost:3000/products/" + id, {name, description, category, price});
  }

  public deleteProduct(id: number){
    return this.http.delete("http://localhost:3000/products/" + id);
  }

  public addProduct(name: string, description: string, category: string, price: number) {
    return this.http.post("http://localhost:3000/products", {
      name, description, category, price
    });
  }

}
