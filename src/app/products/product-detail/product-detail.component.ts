import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          if (params.has("id")) {
            return this.dataService.getProductById(+params.get("id"));
          } else {
            return of(null);
          }
        })
      ).subscribe((res) => {
        this.product = res;
        console.log(this.product);
      });
  }

  ngOnInit() {
  }

  public goBack(): void {
    this.router.navigate(["/products", { id: this.product.id }]);
  }

}
