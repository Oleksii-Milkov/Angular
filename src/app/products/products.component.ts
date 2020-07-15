import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getProductList().subscribe(
      (res) => this.productList = res,
      (err) => console.log(err)
    );
  }

  public productDetailed(id: number): void {
    this.router.navigate(["/products", id]);
  }

}
