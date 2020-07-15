import { Component, OnInit } from '@angular/core';
import { DataService } from '../products/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public productList = [];
  public show: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProductList().subscribe(
      (res) => this.productList = res,
      (err) => console.log(err)
    );
  }

  public updateProduct(id: number, name: string, description: string, category: string, price: number) {
    this.dataService.updateProduct(id, name, description, category, price).subscribe((res) => {
      this.dataService.getProductList().subscribe(
        (res) => this.productList = res,
        (err) => console.log(err)
      );
    });
  }

  public deleteProduct(id: number) {
    this.dataService.deleteProduct(id).subscribe((res) => {
      console.log(res);
      this.dataService.getProductList().subscribe(
        (res) => this.productList = res,
        (err) => console.log(err)
      );
    });
  }

  public addProduct(name: string, description: string, category: string, price: number) {
    this.show = !this.show;
    this.dataService.addProduct(name, description, category, price).subscribe((res) => {
      this.productList.push(res);
    });
  }

  public showCard() {
    this.show = !this.show;
  }

}
